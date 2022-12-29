import { IReducer } from '../../interfaces/IReducer'
import { actions } from './actions/constants'
import IAction from '../../interfaces/IAction'

const rootReducer = (state: IReducer, action: IAction) => {
  switch (action.type) {
    case actions.GET_TOPIC_PHOTOS_SUCCESS:
      return { ...state, selectedTopicPhotos: action.payload }
    default:
      return state
  }
}

export default rootReducer
