import React, { ReactElement } from 'react'
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ImageIcon from '@mui/icons-material/Image'

const ImageSearchPopover = ({
  children,
  recentSearches,
  setRecentSearches
}: {
  children: React.ReactNode
  recentSearches: string[]
  setRecentSearches: ([]) => void
}) => {
  const trendingCollections = ['Yellow Rush', 'Light Tones', "'Tis the Season! (Christmas)", 'church', 'Luxury']
  const trendingTopics = ['Wallpapers', 'Nature', 'Film', 'Architecture & Interiors', 'Current Events']
  const trendingSearches = ['stray cats', 'lightroom preset', 'cookies', 'products', 'film']

  const StyledButton = ({ children, leftIcon }: { children: React.ReactNode; leftIcon?: ReactElement }) => {
    return (
      <Button
        fontSize={[12, 12, 16, 16, 16]}
        paddingX={[2, 2, 4, 4, 4]}
        color='gray.500'
        fontWeight={400}
        variant={'outline'}
        leftIcon={leftIcon}
      >
        {children}
      </Button>
    )
  }

  return (
    <Popover closeOnBlur closeOnEsc autoFocus={false} matchWidth>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width={'100%'} bg='white'>
        <PopoverBody>
          <div className='w-full bg-white'>
            {recentSearches.length > 0 ? (
              <>
                <p className='mx-1 mb-2 text-sm'>
                  Recent Searches ·{' '}
                  <a
                    className='text-gray-500 hover:text-black cursor-pointer mb-0'
                    onClick={() => {
                      localStorage.removeItem('recentSearches')
                      setRecentSearches([])
                    }}
                  >
                    Clear
                  </a>
                </p>
                <div className='flex gap-2 flex-wrap'>
                  {recentSearches?.map((searchTerm: string) => (
                    <StyledButton>{searchTerm}</StyledButton>
                  ))}
                </div>
                <br />
              </>
            ) : (
              ''
            )}
            <p className='mx-1 mb-2 text-sm'>Trending Searches</p>
            <div className='flex sm:w-full gap-2 flex-wrap'>
              {trendingSearches.map((searchTerm: string) => (
                <StyledButton
                  leftIcon={
                    <div className='hidden sm:block'>
                      <TrendingUpIcon />
                    </div>
                  }
                >
                  {searchTerm}
                </StyledButton>
              ))}
            </div>
            <br />
            <p className='mx-1 mb-2 text-sm'>Trending Topics</p>
            <div className='flex sm:w-full gap-2 flex-wrap'>
              {trendingTopics.map((topic: string) => (
                <StyledButton
                  leftIcon={
                    <div className='hidden sm:block'>
                      <ImageIcon />
                    </div>
                  }
                >
                  {topic}
                </StyledButton>
              ))}
            </div>
            <br />
            <p className='mx-1 mb-2 text-sm'>Trending Collections</p>
            <div className='flex sm:w-full gap-2 flex-wrap'>
              {trendingCollections.map((collectionName: string) => (
                <StyledButton>{collectionName}</StyledButton>
              ))}
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ImageSearchPopover
