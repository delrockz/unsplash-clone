import { ICollection } from './ICollection'
import { ITag } from './ITag'
import { IUser } from './IUser'

export interface IPhoto {
  id: string
  description: string
  urls: { small: string; regular: string; full: string; raw: string }
  topic_submissions: any
  user: IUser
  links: { download: string }
  width: number
  height: number
  views: number
  downloads: number
  exif: { name: string }
  tags: ITag[]
  related_collections: { results: ICollection[] }
  created_at: string
}
