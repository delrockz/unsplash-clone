import { IPhoto } from '../../../interfaces/IPhoto'
import { ITopic } from '../../../interfaces/ITopic'
import { actions } from './constants'

export const getTopicPhotos = ({ topic, page }: { topic: string; page: number }) => {
  return {
    type: actions.GET_TOPIC_PHOTOS,
    payload: { topic, page }
  }
}

export const getTopicPhotosSuccess = ({ topic, page, photos }: { topic: ITopic; page: number; photos: IPhoto }) => {
  return {
    type: actions.GET_TOPIC_PHOTOS_SUCCESS,
    payload: { topic, page, photos }
  }
}

export const getEditorialFeedPhotos = ({ page }: { page: number }) => {
  return {
    type: actions.GET_EDITORIAL_FEED_PHOTOS,
    payload: { page }
  }
}

export const getEditorialFeedPhotosSuccess = ({ page, photos }: { page: number; photos: IPhoto[] }) => {
  return {
    type: actions.GET_EDITORIAL_FEED_PHOTOS_SUCCESS,
    payload: { page, photos }
  }
}

export const getPhotoById = (photoId: string) => {
  return {
    type: actions.GET_PHOTO_BY_ID,
    payload: photoId
  }
}

export const getPhotoByIdSuccess = (photo: IPhoto) => {
  return {
    type: actions.GET_PHOTO_BY_ID_SUCCESS,
    payload: photo
  }
}
