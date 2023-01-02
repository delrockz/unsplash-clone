import { SagaIterator } from 'redux-saga'
import { takeLatest, all } from 'redux-saga/effects'
import { actions } from '../actions/constants'
import * as handlers from './handlers'

export function* watcherSaga(): SagaIterator {
  yield all([yield takeLatest(actions.GET_EDITORIAL_FEED_PHOTOS, handlers.getEditorialFeedPhotosHandle)])
  yield all([yield takeLatest(actions.GET_TOPIC_PHOTOS, handlers.getTopicPhotosHandle)])
  yield all([yield takeLatest(actions.GET_PHOTO_BY_ID, handlers.getPhotoByIdHandle)])
}
