import { call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as services from './requests'
import IAction from '../../../interfaces/IAction'
import { SagaIterator } from 'redux-saga'
import { useToast } from '@chakra-ui/react'
import { ITopic } from '../../../interfaces/ITopic'

const handleError = (e: any) =>
  useToast({
    title: e?.response?.data?.error,
    status: 'error',
    isClosable: true
  })

export function* getEditorialFeedPhotosHandle(action: IAction): SagaIterator {
  try {
    const response = yield call(services.getEditorialFeedPhotosService, action.payload)
    yield put(actions.getEditorialFeedPhotosSuccess({ page: action.payload.page, photos: response.data }))
  } catch (e: any) {
    handleError(e)
  }
}

export function* getTopicPhotosHandle(action: IAction): SagaIterator {
  try {
    let topicResponse = { data: {} as ITopic }
    if (action.payload.page === 1) topicResponse = yield call(services.getTopicService, action.payload.topic)
    const topicPhotosResponse = yield call(services.getTopicPhotosService, action.payload)
    yield put(
      actions.getTopicPhotosSuccess({
        topic: topicResponse.data,
        page: action.payload.page,
        photos: topicPhotosResponse.data
      })
    )
  } catch (e: any) {
    handleError(e)
  }
}

export function* getPhotoByIdHandle(action: IAction): SagaIterator {
  try {
    const response = yield call(services.getPhotoByIdService, action.payload)
    yield put(actions.getPhotoByIdSuccess(response.data))
  } catch (e: any) {
    handleError(e)
  }
}
