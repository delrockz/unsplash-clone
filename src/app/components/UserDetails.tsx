import React from 'react'
import { IUser } from '../../interfaces/IUser'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const UserDetails = ({
  user,
  showUsername,
  lighterText,
  primaryTextSize = 'sm'
}: {
  user: IUser
  showUsername: boolean
  lighterText: boolean
  primaryTextSize?: string
}) => {
  return (
    <div key={user?.id} className='flex items-center my-2 py-1 w-fit'>
      <div className='flex-shrink-0 h-8 w-8'>
        <img className='cursor-pointer h-8 w-8 rounded-full' src={user?.profile_image.small} alt='' />
      </div>
      <div className='ml-2'>
        <div
          className={`cursor-pointer text-${primaryTextSize} font-normal ${
            lighterText ? 'text-gray-200 hover:text-white' : 'text-black'
          }`}
        >
          {user?.name}
        </div>
        {showUsername ? (
          <div className='cursor-pointer text-xs text-gray-500 hover:text-black'>{user?.username}</div>
        ) : user?.for_hire ? (
          <div
            className={`cursor-pointer text-xs font-normal ${
              lighterText ? 'text-gray-300 hover:text-gray-100' : 'text-blue-500 hover:text-blue-600'
            }`}
          >
            Available for hire <CheckCircleIcon style={{ fontSize: '14px' }} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default UserDetails
