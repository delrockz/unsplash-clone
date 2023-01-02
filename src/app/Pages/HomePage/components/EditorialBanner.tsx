import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IPhoto } from '../../../../interfaces/IPhoto'
import ImageSearchPopover from '../../../components/ImageSearchPopover'
import SearchIcon from '@mui/icons-material/Search'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import { useHistory } from 'react-router-dom'
import StyledLink from '../../../components/StyledLink'

const EditorialBanner = ({ photo }: { photo: IPhoto }) => {
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const [recentSearches, setRecentSearches] = useState(
    localStorage.recentSearches ? JSON.parse(localStorage.recentSearches) : []
  )

  const handleRecentSearches = () => {
    if (searchTerm) {
      let newRecentSearches = [...recentSearches]
      if (recentSearches.length >= 5) newRecentSearches.shift()
      newRecentSearches.push(searchTerm)
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches))
      setRecentSearches(newRecentSearches)
      setSearchTerm('')
    }
  }

  const handleSearchInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleRecentSearches()
  }

  const trendingLinks = ['flower', 'wallpapers', 'backgrounds', 'happy', 'love']

  return (
    <div className='h-full grid justify-start relative'>
      <img className='center-cropped' alt='Home page banner' src={photo.urls?.regular || ''} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left w-11/12 md:w-7/12 mt-10'>
        <p className='text-white text-2xl md:text-5xl font-bold'>Unsplash</p>
        <br />
        <p className='text-white text-md font-normal md:font-medium md:text-xl'>The internet's source for visuals.</p>
        <p className='text-white text-md font-normal md:font-medium md:text-xl'>Powered by creators everywhere.</p>
        <br />
        <ImageSearchPopover recentSearches={recentSearches} setRecentSearches={setRecentSearches}>
          <div className='md:block hidden'>
            <InputGroup>
              <InputLeftElement
                cursor={'pointer'}
                onClick={handleRecentSearches}
                children={<SearchIcon className='ml-2 mt-3 text-gray-500' />}
              />
              <Input
                bg='white'
                required
                height={50}
                onKeyDown={handleSearchInputKeyDown}
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeholder='Search free high-resolution photos'
              />
              <InputRightElement children={<CenterFocusWeakIcon className='mr-2 mt-3 text-gray-500' />} />
            </InputGroup>
          </div>
        </ImageSearchPopover>
        <p className='text-white mt-3 md:block hidden'>
          Trending:{' '}
          {trendingLinks.map((link) => (
            <>
              <StyledLink>{link}</StyledLink>,{' '}
            </>
          ))}
        </p>
      </div>
      <p className='text-gray-400 text-sm absolute bottom-5 left-5 md:block hidden'>
        <a
          onClick={() => history.push('/photos/' + photo.id)}
          className='text-gray-300 cursor-zoom-in hover:text-white'
        >
          Photo
        </a>{' '}
        by <StyledLink>{photo?.user?.name}</StyledLink>
      </p>
      <p className='text-gray-400 text-sm absolute bottom-5 z-10 left-1/2 transform -translate-x-1/2 lg:block hidden'>
        Read more about the <StyledLink>Unsplash License</StyledLink>
      </p>
    </div>
  )
}

export default EditorialBanner
