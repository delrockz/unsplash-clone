import axios from 'axios'
import { links } from '../../statics/links'

export const getEditorialFeedPhotosService = ({ page }: { page: number }) => {
  return axios.get(links.getEditorialFeedPhotos + `?page=${page}`, {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}

export const getTopicsService = () => {
  // Only 19 topics exist at the moment so hard coding to 25 topics
  return axios.get(links.getTopics + '?per_page=25', {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}

export const getTopicService = (topic: string) => {
  return axios.get(links.getTopic(topic), {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}

export const getTopicPhotosService = ({ topic, page }: { topic: string; page: number }) => {
  return axios.get(links.getTopicPhotos(topic) + `?page=${page}`, {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}

export const getPhotoByIdService = (photoId: string) => {
  return axios.get(links.getPhotoById(photoId), {
    headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` }
  })
}
