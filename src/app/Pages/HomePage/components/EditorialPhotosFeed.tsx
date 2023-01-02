import React from 'react'
import { Spinner } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useHistory } from 'react-router-dom'
import { IPhoto } from '../../../../interfaces/IPhoto'
import ImageCard from './ImageCard'
import ImageWrapper from './ImageWrapper'

const EditorialPhotosFeed = ({
  editorialFeedPhotos,
  fetchMoreEditorialFeedPhotos
}: {
  editorialFeedPhotos: IPhoto[]
  fetchMoreEditorialFeedPhotos: () => void
}) => {
  const history = useHistory()
  return (
    <InfiniteScroll
      dataLength={editorialFeedPhotos?.length || 0}
      next={fetchMoreEditorialFeedPhotos}
      hasMore={true} // Assuming has more since API does not tell you otherwise
      loader={
        <div className='flex justify-center m-10'>
          <Spinner />
        </div>
      }
    >
      <ImageWrapper>
        {editorialFeedPhotos?.map((photo: IPhoto) => (
          <ImageCard onClick={() => history.push('/photos/' + photo.id)} photo={photo} />
        ))}
      </ImageWrapper>
    </InfiniteScroll>
  )
}

export default EditorialPhotosFeed
