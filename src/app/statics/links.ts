const host = import.meta.env.VITE_UNSPLASH_API_ENDPOINT || ''

export const links = {
  getTopicPhotos: (topic: string) => `${host}/topics/${topic}/photos`,
  getRandomPhoto: `${host}/photos/random`
}
