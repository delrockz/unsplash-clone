import React from 'react'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { ITopic } from '../../../../interfaces/ITopic'
import StyledLink from '../../../components/StyledLink'

const TopicBanner = ({ selectedTopic }: { selectedTopic: ITopic }) => {
  const history = useHistory()
  return (
    <div className='h-full grid justify-start relative'>
      <img className='center-cropped' alt='Home page banner' src={selectedTopic?.cover_photo?.urls.regular || ''} />
      <div className='absolute top-1/2 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-left w-11/12 md:w-1/2 mt-10'>
        <p className='text-white text-2xl md:text-5xl font-bold'>{selectedTopic.title}</p>
        <br />
        <p className='text-white text-md font-normal md:font-medium md:text-xl hidden sm:block'>
          {selectedTopic.description}
        </p>
        <br className='sm:block hidden' />
        <Button height={10} fontWeight={400}>
          Submit to&nbsp;<span className='font-semibold'>{selectedTopic.title}</span>
        </Button>
      </div>
      <p className='text-gray-400 text-sm absolute bottom-5 left-5 md:block hidden'>
        <a
          onClick={() => history.push('/photos/' + selectedTopic?.cover_photo?.id)}
          className='text-gray-300 cursor-zoom-in hover:text-white'
        >
          Photo
        </a>{' '}
        by <StyledLink>{selectedTopic?.cover_photo?.user?.name}</StyledLink>
      </p>
      <p className='text-gray-400 text-sm absolute bottom-5 z-10 left-1/2 transform -translate-x-1/2 lg:block hidden'>
        Read more about the <StyledLink>Unsplash License</StyledLink>
      </p>
    </div>
  )
}

export default TopicBanner
