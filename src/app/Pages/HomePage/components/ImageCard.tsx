import React, { useState } from 'react'
import { IPhoto } from '../../../../interfaces/IPhoto'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AddIcon from '@mui/icons-material/Add'
import UserDetails from '../../../components/UserDetails'

const ImageCard = ({ photo, onClick }: { photo: IPhoto; onClick: () => void }) => {
  const [showImageOptions, setShowImageOptions] = useState(false)

  return (
    <div
      onMouseOver={() => setShowImageOptions(true)}
      onMouseLeave={() => setShowImageOptions(false)}
      className='relative mb-6'
      onClick={onClick}
    >
      <img
        title={photo.description}
        className='block h-auto w-full hover:filter hover:brightness-75 transition-all ease-linear cursor-zoom-in'
        src={photo.urls.small}
      />
      {showImageOptions && (
        <>
          <div className='cursor-pointer hover:text-black rounded-md w-10 h-8 bg-white text-gray-500 absolute top-4 right-16 z-50 flex justify-center items-center'>
            <FavoriteIcon style={{ fontSize: '20px' }} />
          </div>
          <div className='cursor-pointer hover:text-black rounded-md w-10 h-8 bg-white text-gray-500 absolute top-4 right-4 z-50 flex justify-center items-center'>
            <AddIcon />
          </div>
          <div className='cursor-pointer text-white absolute bottom-1 left-4 z-50 flex justify-center items-center'>
            <UserDetails user={photo.user} showUsername={false} lighterText={true} />
          </div>
          <div
            onClick={() => window.open(photo.links.download)}
            className='cursor-pointer hover:text-black rounded-md w-10 h-8 bg-white text-gray-500 absolute bottom-4 right-4 z-50 flex justify-center items-center'
          >
            <ArrowDownwardIcon style={{ fontSize: '20px' }} />
          </div>
        </>
      )}
    </div>
  )
}

export default ImageCard
