import { IPhoto } from './IPhoto'
import { ITag } from './ITag'
import { IUser } from './IUser'

export interface ICollection {
  tags: ITag[]
  preview_photos: IPhoto[]
  title: string
  total_photos: number
  user: IUser
}
