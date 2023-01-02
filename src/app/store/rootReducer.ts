import { IReducer } from '../../interfaces/IReducer'
import { actions } from './actions/constants'
import IAction from '../../interfaces/IAction'
import initialState from './initialState'
import { IPhoto } from '../../interfaces/IPhoto'

const rootReducer = (state: IReducer = initialState, action: IAction) => {
  switch (action.type) {
    case actions.GET_TOPIC_PHOTOS_SUCCESS:
      if (action.payload.page === 1)
        return {
          ...state,
          selectedTopic: {
            ...action.payload.topic,
            photos: action.payload.photos
          }
        }
      else
        return {
          ...state,
          selectedTopic: {
            ...state.selectedTopic,
            photos: [...(state.selectedTopic.photos || []), ...action.payload.photos]
          }
        }
    case actions.GET_EDITORIAL_FEED_PHOTOS_SUCCESS:
      if (action.payload.page === 1)
        return {
          ...state,
          editorialFeedPhotos: action.payload.photos
        }
      else
        return {
          ...state,
          editorialFeedPhotos: [...(state.editorialFeedPhotos || []), ...action.payload.photos]
        }
    case actions.GET_PHOTO_BY_ID:
      return {
        ...state,
        selectedPhoto: {} as IPhoto
      }
    case actions.GET_PHOTO_BY_ID_SUCCESS:
      return {
        ...state,
        selectedPhoto: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
