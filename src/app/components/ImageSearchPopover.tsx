import React from 'react'
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const ImageSearchPopover = (props: any) => {
  return (
    <Popover>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <p>
            Recent Searches · <span className='text-gray-500'>Clear</span>
          </p>
          <p>Trending Searches</p>
          <Button leftIcon={<TrendingUpIcon />}>stray cats</Button>
          <Button leftIcon={<TrendingUpIcon />}>lightroom preset</Button>
          <Button leftIcon={<TrendingUpIcon />}>cookies</Button>
          <Button leftIcon={<TrendingUpIcon />}>products</Button>
          <Button leftIcon={<TrendingUpIcon />}>film</Button>
          <p>Trending Topics</p>
          <p>Trending Collections</p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ImageSearchPopover
