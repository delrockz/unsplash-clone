import { IPhoto } from '../../../interfaces/IPhoto'
import { ITopic } from '../../../interfaces/ITopic'
import { getPhotoByIdService, getTopicsService } from '../../store/sagas/requests'

export const getTopics = async (callback: (err: any, response: ITopic[]) => void) => {
  try {
    const response = await getTopicsService()
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message, [] as ITopic[])
  }
}

export const getPhotoById = async (photoId: string, callback: (err: any, response: IPhoto) => void) => {
  try {
    const response = await getPhotoByIdService(photoId)
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message, {} as IPhoto)
  }
}
