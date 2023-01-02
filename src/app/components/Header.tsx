import React, { useState, useEffect, useRef } from 'react'
import { Link, RouteComponentProps, useLocation, withRouter } from 'react-router-dom'
import { Center, Divider } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/input'

import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import SearchIcon from '@mui/icons-material/Search'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { ITopic } from '../../interfaces/ITopic'
import ImageSearchPopover from './ImageSearchPopover'
import { getTopics } from '../API/Unsplash/Unsplash'
import UnsplashButton from './UnsplashButton'
import HamburgerPopover from '../Pages/HomePage/components/HamburgerPopover'

const Header: React.FC<RouteComponentProps> = (props) => {
  const location = useLocation()

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

  const [topics, setTopics] = useState<ITopic[]>([] as ITopic[])

  const headerMenu = [
    { menu: 'Explore', id: 'explore', className: 'text-gray-400 hover:text-gray-700' },
    { menu: 'Advertise', id: 'advertise', className: 'text-gray-400 hover:text-gray-700' },
    {
      menu: 'Unsplash+',
      id: 'unsplash',
      className: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'
    }
  ]

  const handleGetTopics = () => {
    getTopics((err: any, responseData: ITopic[]) => {
      setTopics(responseData)
    })
  }

  useEffect(() => {
    handleGetTopics()
  }, [])

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
        <div className='flex items-center py-3 gap-x-4 md:gap-x-5'>
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
          <ImageSearchPopover recentSearches={recentSearches} setRecentSearches={setRecentSearches}>
            <div className='w-3/4 md:w-2/3'>
              <InputGroup>
                <InputLeftElement
                  cursor={'pointer'}
                  onClick={handleRecentSearches}
                  children={<SearchIcon className='ml-2 mt-1 text-gray-500' />}
                />
                <Input
                  bg='gray.50'
                  borderRadius={20}
                  onKeyDown={handleSearchInputKeyDown}
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  placeholder='Search free high-resolution photos'
                />
                <div className='hidden md:block'>
                  <InputRightElement children={<CenterFocusWeakIcon className='mr-2 text-gray-500 ' />} />
                </div>
              </InputGroup>
            </div>
          </ImageSearchPopover>
          <nav className='hidden md:flex space-x-5'>
            {headerMenu.map((menuItem) => (
              <button
                type='button'
                className={`group rounded-md inline-flex items-center text-sm font-normal focus:outline-none ${
                  menuItem.className || ''
                }`}
                onClick={() => props.history.push(menuItem.id)}
              >
                <span>{menuItem.menu}</span>
              </button>
            ))}
          </nav>
          <div className='hidden md:block'>
            <Center className='hidden md:block' height='30px'>
              <Divider orientation='vertical' />
            </Center>
          </div>
          <div className='items-center hidden md:flex text-sm '>
            <button
              type='button'
              className='w-20 group rounded-md text-gray-400 hover:text-gray-700 font-normal focus:outline-none'
            >
              Log in
            </button>
            /
            <button
              type='button'
              className='w-20 group rounded-md text-gray-400 hover:text-gray-700 font-normal focus:outline-none'
            >
              Sign up
            </button>
          </div>
          <div className='hidden md:block'>
            <UnsplashButton>
              Submit <span className='hidden xl:block'> &nbsp;a photo</span>
            </UnsplashButton>
          </div>
          <HamburgerPopover />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='flex items-center gap-x-4 px-4'>
        <button
          type='button'
          className={`text-gray-500 group inline-flex items-center text-sm truncate font-medium focus:outline-none mx-2 pb-2 min-w-fit h-12 ${
            location.pathname === '/' && 'text-black border-b-2 border-black pb-1'
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
            {topics.map((menuItem) => (
              <button
                type='button'
                className={`text-gray-500 group inline-flex items-center text-sm truncate font-medium focus:outline-none mx-2 pb-2 min-w-fit h-12 ${
                  location.pathname.includes(menuItem.slug) && 'text-black border-b-2 border-black pb-1'
                }`}
                onClick={() => props.history.push('/t/' + menuItem.slug)}
              >
                <span>{menuItem.title}</span>
              </button>
            ))}
          </div>
          <span
            className='absolute top-1 font-semibold justify-center cursor-pointer text-gray-500 text-base z-10 -left-6'
            ref={leftArrow}
            title='Scroll list to the left'
            onClick={() => scroll(false)}
          >
            <ChevronLeftIcon fontSize='large' />
          </span>
          <span
            className='absolute top-1 font-semibold justify-center cursor-pointer text-gray-500 text-base z-10 -right-6'
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
