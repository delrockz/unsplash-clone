import React, { useMemo } from 'react'
import { Tag } from '@chakra-ui/react'
import { ITag } from '../../../../interfaces/ITag'

const ImageTags = ({ tags }: { tags: ITag[] }) => {
  const imageTags = useMemo(() => tags?.map((tag: ITag) => tag.source?.title ?? tag.title), [tags])

  return (
    <div>
      {imageTags?.map((tag: string) => (
        <Tag
          color={'gray.500'}
          className='capitalize mr-1 my-1 cursor-pointer hover:bg-gray-200 hover:text-gray-600'
          borderRadius={3}
        >
          {tag}
        </Tag>
      ))}
    </div>
  )
}

export default ImageTags
