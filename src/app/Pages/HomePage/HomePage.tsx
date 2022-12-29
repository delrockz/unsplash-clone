import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IReducer } from '../../../interfaces/IReducer'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import SearchIcon from '@mui/icons-material/Search'
import ImageSearchPopover from '../../components/ImageSearchPopover'
import { getRandomPicture } from '../../API/Unsplash/Unsplash'
const HomePage = () => {
  const selectedTopicPhotos = useSelector((state: IReducer) => state.selectedTopicPhotos)
  const [bannerData, setBannerData] = useState({})

  const handleGetRandomPhoto = () => {
    getRandomPicture((err: string, responseData: object) => {
      setBannerData(responseData)
    })
  }

  useEffect(() => {
    handleGetRandomPhoto()
  }, [])

  return (
    <div>
      <div className='h-96 grid justify-start relative'>
        <img
          className='center-cropped'
          alt='Home page banner'
          src={bannerData. || ''}
        />
        <div className='absolute left-1/2 top-1/2 text-left'>
          <p className='my-1 p-2 text-2xl font-semibold'>Unsplash</p>
          <p className='my-1 p-2 texl-lg'>The internet's source for visuals.</p>
          <p className='my-1 p-2 texl-lg'>Powered by creators everywhere.</p>
          <ImageSearchPopover>
            <div className='w-2/3'>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<SearchIcon className='ml-2 text-gray-500' />} />
                <Input placeholder='Search free high-resolution photos' />
                <InputRightElement children={<CenterFocusWeakIcon className='mr-2 text-gray-500' />} />
              </InputGroup>
            </div>
          </ImageSearchPopover>
          <p className='text-white'>
            Trending
            <a className='text-gray-500 hover:text-white'>flower</a>,
            <a className='text-gray-500 hover:text-white'>wallpapers</a>,
            <a className='text-gray-500 hover:text-white'>backgrounds</a>,
            <a className='text-gray-500 hover:text-white'>happy</a>,
            <a className='text-gray-500 hover:text-white'>love</a>
          </p>
          <p className='text-gray'>
            <a className='text-gray-500 hover:text-white'>Photo</a> by{' '}
            <a className='text-gray-500 hover:text-white'>Alex jiang</a>
          </p>
        </div>
      </div>
      <div className='columns-2 md:columns-3 lg:columns-4'></div>
    </div>
  )
}

export default HomePage
