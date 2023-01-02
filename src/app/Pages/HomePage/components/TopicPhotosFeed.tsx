import React from 'react'
import { Spinner } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useHistory } from 'react-router-dom'
import { IPhoto } from '../../../../interfaces/IPhoto'
import { ITopic } from '../../../../interfaces/ITopic'
import ImageCard from './ImageCard'
import ImageWrapper from './ImageWrapper'
import TopContributors from './TopContributors'

const TopicPhotosFeed = ({
  selectedTopic,
  fetchMoreSelectedTopicPhotos
}: {
  selectedTopic: ITopic
  fetchMoreSelectedTopicPhotos: () => void
}) => {
  const history = useHistory()
  return (
    <InfiniteScroll
      dataLength={selectedTopic?.photos?.length || 0}
      next={fetchMoreSelectedTopicPhotos}
      hasMore={true} // Assuming has more since API does not tell you otherwise
      loader={
        <div className='flex justify-center m-10'>
          <Spinner />
        </div>
      }
    >
      <ImageWrapper>
        <TopContributors topContributors={selectedTopic?.top_contributors} />
        {selectedTopic?.photos.map((photo: IPhoto) => (
          <ImageCard onClick={() => history.push('/photos/' + photo.id)} photo={photo} />
        ))}
      </ImageWrapper>
    </InfiniteScroll>
  )
}

export default TopicPhotosFeed
