import axios from 'axios'
import { links } from '../../statics/links'

export const getImages = async (callback: any) => {
  try {
    const response = await axios.get(import.meta.env.VITE_UNSPLASH_API_ENDPOINT + '/photos/random', {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      }
    })
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message)
  }
}

export const getTopics = async (callback: any) => {
  try {
    const response = await axios.get(import.meta.env.VITE_UNSPLASH_API_ENDPOINT + '/topics?per_page=25', {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      }
    })
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message)
  }
}

export const getTopicPhotos = async (topic: string, callback: any) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_UNSPLASH_API_ENDPOINT}/topics/${topic}/photos`, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      }
    })
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message)
  }
}

export const getRandomPicture = async (callback: any) => {
  try {
    const response = await axios.get(links.getRandomPhoto, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      }
    })
    return callback(null, response.data)
  } catch (err: any) {
    console.log(err)
    return callback(err.message)
  }
}
