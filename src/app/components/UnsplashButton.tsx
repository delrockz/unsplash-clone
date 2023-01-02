import { Button } from '@chakra-ui/react'
import React from 'react'

const UnsplashButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      height={8}
      paddingX={2}
      fontSize={14}
      variant={'outline'}
      fontWeight={400}
      color='gray.500'
      _hover={{ border: '1px solid', borderColor: 'gray.700', color: 'gray.700' }}
    >
      {children}
    </Button>
  )
}

export default UnsplashButton
