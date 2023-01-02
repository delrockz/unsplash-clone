import { IPhoto } from './IPhoto'
import { ITopic } from './ITopic'

export interface IReducer {
  selectedTopic: ITopic
  selectedPhoto: IPhoto
  editorialFeedPhotos: IPhoto[]
}
