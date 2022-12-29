import axios from 'axios'
import { links } from '../../statics/links'

export const getHeaders = (token: string) => {
  if (token) {
    return {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const getTopicPhotosService = (topic: string) => {
  return axios.get(links.getTopicPhotos(topic), {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}
