import React from 'react'

const UnsplashAwards = () => {
  return (
    <div className='mx-3 md:mx-0 py-8 flex flex-col text-center justify-start items-center bg-black text-white hover:bg-gray-900 cursor-pointer'>
      <p className='text-2xl md:text-3xl font-semibold'>Unsplash Awards 2022</p>
      <p className='text-gray-300 text-lg md:text-xl'>The results are in. Celebrate this year's finalists 🎉</p>
      <a className=' underline text-lg md:text-xl'>Learn more</a>
    </div>
  )
}

export default UnsplashAwards
