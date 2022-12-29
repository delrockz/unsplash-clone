import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Button, Center, Divider, IconButton, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/input'

import NotificationsIcon from '@mui/icons-material/Notifications'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import SearchIcon from '@mui/icons-material/Search'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// import { getImages, getTopicPhotos, getTopics } from '../API/Unsplash/Unsplash'
import { ITopic } from '../../interfaces/ITopic'
import { useDispatch } from 'react-redux'
import { getTopicPhotos } from '../store/actions'

const Header: React.FC<any> = (props) => {
  const location = useLocation()
  const dispatch = useDispatch()

  const topicsScrollerRef = useRef<HTMLDivElement>(null)
  const leftArrow = useRef<HTMLElement>(null)
  const rightArrow = useRef<HTMLElement>(null)

  const hasLeftScroll = () => {
    const navbarScroller = topicsScrollerRef.current
    if (navbarScroller) return navbarScroller.scrollLeft > 0
  }

  const hasRightScroll = () => {
    const navbarScroller = topicsScrollerRef.current
    if (navbarScroller)
      return Math.floor(navbarScroller.scrollWidth - navbarScroller.scrollLeft) >= navbarScroller.offsetWidth + 15
  }

  const onNavBarMouseOver = () => {
    // To show scrollers in case the width is more than the screen
    const navbarScroller = topicsScrollerRef.current
    if (!navbarScroller) return

    const navBarHasScroll = navbarScroller.scrollWidth > navbarScroller.offsetWidth
    if (!navBarHasScroll) return

    if (window.innerWidth <= 768) return // User's probably on a touchscreen device, scroll is available natively.

    // Has left scroll
    const navBarHasLeftScroll = hasLeftScroll()
    const navBarHasRightScroll = hasRightScroll()

    const leftArrowElement = leftArrow.current
    const rightArrowElement = rightArrow.current
    if (navBarHasLeftScroll && leftArrowElement) leftArrowElement.style.display = 'flex'
    if (navBarHasRightScroll && rightArrowElement) rightArrowElement.style.display = 'flex'
  }

  const onNavBarMouseOut = () => {
    const leftArrowElement = leftArrow.current
    const rightArrowElement = rightArrow.current
    if (leftArrowElement) leftArrowElement.style.display = 'none'
    if (rightArrowElement) rightArrowElement.style.display = 'none'
  }

  const scroll = (right = true) => {
    const navbarScroller = topicsScrollerRef.current
    if (!navbarScroller) return

    if (right) navbarScroller.scrollLeft = navbarScroller.scrollLeft + 350
    else navbarScroller.scrollLeft = navbarScroller.scrollLeft - 350

    const leftArrowElement = leftArrow.current
    const rightArrowElement = rightArrow.current

    if (window.innerWidth <= 768) return

    if (leftArrowElement)
      if (hasLeftScroll()) leftArrowElement.style.display = 'flex'
      else leftArrowElement.style.display = 'none'

    if (rightArrowElement)
      if (hasRightScroll()) rightArrowElement.style.display = 'flex'
      else rightArrowElement.style.display = 'none'
  }

  const [showNavigationMenu, setShowNavigationMenu] = useState(false)
  const [topics, setTopics] = useState([])
  const [showSearchModal, setShowSearchModal] = useState(false)

  const headerMenu = [
    { menu: 'Explore', id: 'explore' },
    { menu: 'Advertise', id: 'advertise' },
    {
      menu: 'Unsplash+',
      id: 'unsplash',
      className: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'
    }
  ]
  const headerSubMenu = [
    { menu: 'Wallpapers', id: 'wallpapers' },
    { menu: '3D Renders', id: '3d-renders' },
    { menu: 'Travel', id: 'travel' },
    { menu: 'Nature', id: 'nature' },
    { menu: 'Street Photography', id: 'street-photography' },
    { menu: 'Experimental', id: 'experimental' },
    { menu: 'Textures & Patterns', id: 'textures-patterns' },
    { menu: 'Animals', id: 'animals' },
    { menu: 'Architecture & Interiors', id: 'architecture-interiors' },
    { menu: 'Fashion & Beauty', id: 'fashion-beauty' },
    { menu: 'Film', id: 'film' },
    { menu: 'Food & Drink', id: 'food-drink' },
    { menu: 'People', id: 'people' },
    { menu: 'Spirituality', id: 'spirituality' },
    { menu: 'Business & Work', id: 'business-work' },
    { menu: 'Athletics', id: 'athletics' },
    { menu: 'Health & Wellness', id: 'health-wellness' },
    { menu: 'Current Events', id: 'current-events' },
    { menu: 'Arts & Culture', id: 'arts-culture' }
  ]

  const handleGetTopics = () => {
    // getTopics((err: any, responseData: any) => {
    //   console.log(responseData.map((res: any) => res.title))
    //   setTopics(
    //     responseData.map((topic: ITopic) => ({ slug: topic.slug, title: topic.title, description: topic.description }))
    //   )
    // })
  }

  // useEffect(() => {
  //   handleGetTopics()
  // }, [])

  return (
    <div className='bg-white fixed top-0 w-full z-[999]'>
      <div
        className='mx-auto px-4'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99
        }}
      >
        <div className='flex items-center py-3 gap-x-5'>
          <Link to='/'>
            <svg
              width='32'
              height='32'
              className='hic6U'
              viewBox='0 0 32 32'
              version='1.1'
              aria-labelledby='unsplash-home'
              aria-hidden='false'
            >
              <desc lang='en-US'>Unsplash logo</desc>
              <title id='unsplash-home'>Unsplash Home</title>
              <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
            </svg>
          </Link>
          <div className='w-2/3'>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children={<SearchIcon className='ml-2 text-gray-500' />} />
              <Input className='w-80' borderRadius={20} placeholder='Search free high-resolution photos' />
              <InputRightElement children={<CenterFocusWeakIcon className='mr-2 text-gray-500' />} />
            </InputGroup>
          </div>
          <nav className='hidden md:flex space-x-5'>
            {headerMenu.map((menuItem) => (
              <button
                type='button'
                className={`group rounded-md inline-flex items-center text-base font-normal focus:outline-none ${
                  menuItem.className || ''
                }`}
                onClick={() => props.history.push(menuItem.id)}
              >
                <span>{menuItem.menu}</span>
              </button>
            ))}
          </nav>
          <Center height='30px'>
            <Divider orientation='vertical' />
          </Center>
          <div className='flex items-center'>
            <button type='button' className='w-24 group rounded-md text-base font-normal focus:outline-none'>
              Log in
            </button>
            /
            <button type='button' className='w-24 group rounded-md text-base font-normal focus:outline-none'>
              Sign up
            </button>
          </div>
          <Button variant={'outline'} fontWeight={400} color='gray.500'>
            Submit <span className='hidden xl:block'> &nbsp;a photo</span>
          </Button>
          <div>
            <button
              type='button'
              className='rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 '
              onClick={() => {
                setShowNavigationMenu((prev) => !prev)
              }}
            >
              {!showNavigationMenu ? (
                <>
                  <span className='sr-only'>Open menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='black'
                    aria-hidden='true'
                  >
                    <path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </>
              ) : (
                <>
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='flex items-center gap-x-4 px-4'>
        <button
          type='button'
          className={`group inline-flex items-center text-base font-normal focus:outline-none h-12 ${
            location.pathname === '/' && 'border-b-2 border-black'
          }`}
          onClick={() => props.history.push('/')}
        >
          <span>Editorial</span>
        </button>
        <Center height='30px'>
          <Divider orientation='vertical' />
        </Center>
        <div className='flex items-center relative' onMouseOver={onNavBarMouseOver} onMouseOut={onNavBarMouseOut}>
          <div
            className='scroll-smooth fixedcontainer nopadding flex gap-x-4 items-center relative'
            ref={topicsScrollerRef}
          >
            {headerSubMenu.map((menuItem) => (
              <button
                type='button'
                className={`group inline-flex items-center text-base truncate font-normal focus:outline-none mx-2 min-w-fit h-12 ${
                  location.pathname.includes(menuItem.id) && 'border-b-2 border-black'
                }`}
                onClick={() => {
                  props.history.push('/t/' + menuItem.id)
                  dispatch(getTopicPhotos(menuItem.id))
                }}
              >
                <span>{menuItem.menu}</span>
              </button>
            ))}
          </div>
          <span
            className='absolute top-2 font-semibold justify-center cursor-pointer text-gray-500 text-base z-10 -left-6'
            ref={leftArrow}
            title='Scroll list to the left'
            onClick={() => scroll(false)}
          >
            <ChevronLeftIcon fontSize='large' />
          </span>
          <span
            className='absolute top-2 font-semibold justify-center cursor-pointer text-gray-500 text-base z-10 -right-6'
            ref={rightArrow}
            title='Scroll list to the right'
            onClick={() => scroll()}
          >
            <ChevronRightIcon fontSize='large' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
