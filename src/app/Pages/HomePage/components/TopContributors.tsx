import React from 'react'
import { IUser } from '../../../../interfaces/IUser'
import UserDetails from '../../../components/UserDetails'

const TopContributors = ({ topContributors }: { topContributors: IUser[] }) => {
  return (
    <div className='mx-4 md:mx-0 mb-6 p-4 border border-1 border-gray-300'>
      <p className='font-semibold'>Top contributors</p>
      {topContributors?.map((user: IUser) => (
        <UserDetails user={user} showUsername={true} lighterText={false} />
      ))}
    </div>
  )
}

export default TopContributors
