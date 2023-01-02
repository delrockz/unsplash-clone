import React from 'react'

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className='md:columns-2 lg:columns-3 gap-x-6'>{children}</div>
}

export default ImageWrapper
