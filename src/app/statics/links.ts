const host = import.meta.env.VITE_UNSPLASH_API_ENDPOINT || ''

export const links = {
  getTopics: `${host}/topics`,
  getTopic: (topic: string) => `${host}/topics/${topic}`,
  getTopicPhotos: (topic: string) => `${host}/topics/${topic}/photos`,
  getPhotoById: (photoId: string) => `${host}/photos/${photoId}`,
  getEditorialFeedPhotos: `${host}/photos`
}
