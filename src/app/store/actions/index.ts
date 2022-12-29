import { actions } from './constants'

export const getTopicPhotos = (payload: string) => {
  return {
    type: actions.GET_TOPIC_PHOTOS,
    payload
  }
}

export const getTopicPhotosSuccess = (payload: any) => {
  return {
    type: actions.GET_TOPIC_PHOTOS_SUCCESS,
    payload
  }
}
