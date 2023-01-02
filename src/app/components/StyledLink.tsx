import React from 'react'

const StyledLink = ({ children }: { children: React.ReactNode }) => (
  <a className='text-gray-300 cursor-pointer hover:text-white'>{children}</a>
)

export default StyledLink
