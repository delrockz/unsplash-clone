import { ITopic } from './../../interfaces/ITopic'
import { IPhoto } from '../../interfaces/IPhoto'

const initialState = {
  selectedTopic: {} as ITopic,
  editorialFeedPhotos: [] as IPhoto[],
  selectedPhoto: {} as IPhoto
}

export default initialState
