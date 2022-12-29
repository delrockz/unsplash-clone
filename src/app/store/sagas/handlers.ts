import { call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as services from './requests'
import IAction from '../../../interfaces/IAction'
import { SagaIterator } from 'redux-saga'
import { useToast } from '@chakra-ui/react'

const handleError = (e: any) =>
  useToast({
    title: e?.response?.data?.error,
    status: 'error',
    isClosable: true
  })

export function* getTopicPhotosHandle(action: IAction): SagaIterator {
  try {
    const response = yield call(services.getTopicPhotosService, action.payload)
    yield put(actions.getTopicPhotosSuccess(response.data))
  } catch (e: any) {
    handleError(e)
  }
}
