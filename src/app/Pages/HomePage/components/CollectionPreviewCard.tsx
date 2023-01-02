import React from 'react'
import { ICollection } from '../../../../interfaces/ICollection'
import ImageTags from './ImageTags'

const CollectionPreviewCard = ({ collection }: { collection: ICollection }) => {
  return (
    <div className='col-span-1 '>
      <div className='flex flex-wrap w-full h-64 rounded-md cursor-pointer hover:brightness-110 transition-all ease-linear duration-75'>
        <div className='w-52 h-full'>
          <img
            className='block object-cover object-center w-full h-full'
            src={collection.preview_photos[0]?.urls.small}
          />
        </div>
        <div className='w-28 h-32'>
          <img
            className='block object-cover object-center w-full h-full'
            src={collection.preview_photos[1]?.urls.small}
          />
          <img
            className='block object-cover object-center w-full h-full'
            src={collection.preview_photos[2]?.urls.small}
          />
        </div>
      </div>
      <p className='font-semibold text-lg text-black mt-2'>{collection.title}</p>
      <div className='text-sm text-gray-500'>
        <p>
          {collection.total_photos} photos · {collection.user.name}
        </p>
      </div>
      {collection.tags?.length > 0 && (
        <div className='my-4'>
          <ImageTags tags={collection.tags} />
        </div>
      )}
    </div>
  )
}

export default CollectionPreviewCard
