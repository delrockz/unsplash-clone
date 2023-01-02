import { IPhoto } from './IPhoto'
import { IUser } from './IUser'

export interface ITopic {
  slug: string
  title: string
  description: string
  cover_photo: IPhoto
  photos: IPhoto[]
  top_contributors: IUser[]
}
