import React, { useState, useMemo, ReactText } from 'react'
import {
  Box,
  Button,
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tag
} from '@chakra-ui/react'
import { IPhoto } from '../../../../interfaces/IPhoto'
import UserDetails from '../../../components/UserDetails'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import GppGoodIcon from '@mui/icons-material/GppGoodOutlined'
import UnsplashButton from '../../../components/UnsplashButton'
import InfoIcon from '@mui/icons-material/Info'
import ReplyIcon from '@mui/icons-material/Reply'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ImageTags from './ImageTags'
import { ICollection } from '../../../../interfaces/ICollection'
import CollectionPreviewCard from './CollectionPreviewCard'

const PhotoModal = ({
  photo,
  closePhotoModal,
  showPhotoModal
}: {
  photo: IPhoto
  closePhotoModal: () => void
  showPhotoModal: boolean
}) => {
  const [showImageOptions, setShowImageOptions] = useState(false)
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const approvedTopicSubmissions = useMemo(
    () =>
      Object.keys(photo.topic_submissions || {})
        .filter((topic) => photo.topic_submissions[topic]?.status === 'approved')
        .join(', '),
    [photo?.topic_submissions]
  )

  const DownloadPhotoMenu = () => {
    const StyledMenuItem = ({ children, photoUrl }: { children: React.ReactNode; photoUrl: string }) => (
      <MenuItem
        onClick={() => window.open(photoUrl)}
        bg='black'
        color='white'
        fontSize={14}
        justifyContent='flex-end'
        fontWeight={400}
        _hover={{ color: 'gray.400' }}
      >
        {children}
      </MenuItem>
    )

    return (
      <Menu>
        <Button
          pl={3}
          pr={0}
          transition='all 0.2s'
          borderRadius='md'
          fontSize={15}
          height={8}
          fontWeight={400}
          bg={'green.400'}
          color={'white'}
          _hover={{ bg: 'green.500' }}
          onClick={() => window.open(photo.links.download)}
        >
          Download Free
          <Center pl={2} height={10}>
            <Divider orientation='vertical' />
          </Center>
          <MenuButton
            px={1}
            transition='all 0.2s'
            borderRadius='0px 5px 5px 0px'
            fontSize={15}
            height={8}
            fontWeight={400}
            bg={'green.400'}
            color={'white'}
            _hover={{ bg: 'green.500' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center'>
              <ExpandMoreIcon />
            </div>
          </MenuButton>
        </Button>
        <MenuList bg='black'>
          {photo?.urls?.small && (
            <StyledMenuItem photoUrl={photo?.urls?.small}>
              Small&nbsp;<span className='text-gray-400 font-medium'>(640 x 853)</span>
            </StyledMenuItem>
          )}
          {photo?.urls?.regular && (
            <StyledMenuItem photoUrl={photo?.urls?.regular}>
              Medium&nbsp;<span className='text-gray-400 font-medium'>(1920 x 2560)</span>
            </StyledMenuItem>
          )}
          {photo?.urls?.full && (
            <StyledMenuItem photoUrl={photo?.urls?.full}>
              Large&nbsp;<span className='text-gray-400 font-medium'>(2400 x 3200)</span>
            </StyledMenuItem>
          )}
          <MenuDivider />
          {photo?.urls?.raw && (
            <StyledMenuItem photoUrl={photo?.urls?.raw}>
              Original Size&nbsp;
              <span className='text-gray-400 font-medium'>
                ({photo.width} x {photo.height})
              </span>
            </StyledMenuItem>
          )}
        </MenuList>
      </Menu>
    )
  }

  return (
    <Modal closeOnEsc onClose={closePhotoModal} size={'full'} isOpen={showPhotoModal} closeOnOverlayClick>
      <ModalOverlay bg='blackAlpha.700' />
      <ModalContent
        padding={0}
        marginTop={[10, 10, 5, 5, 5]}
        marginBottom={28}
        marginX={[0, 0, 20, 20, 32]}
        borderRadius={5}
      >
        {photo.id ? (
          <ModalHeader paddingY={0} paddingX={4}>
            <div className='mb-2 sm:mb-0 flex flex-col sm:flex-row items-start justify-between sm:items-center'>
              <div className='w-48'>
                {photo.user && (
                  <UserDetails user={photo.user} lighterText={false} showUsername={false} primaryTextSize='base' />
                )}
              </div>
              <div className='flex w-full justify-between sm:justify-end sm:items-center gap-x-2'>
                <div className='flex items-center gap-x-2'>
                  <div className='cursor-pointer border border-1 border-gray-300 hover:border-gray-500 hover:text-black rounded-md w-10 h-8 bg-white text-gray-500 flex justify-center items-center'>
                    <FavoriteIcon style={{ fontSize: '18px' }} />
                  </div>
                  <div className='cursor-pointer border border-1 border-gray-300 hover:border-gray-500 hover:text-black rounded-md w-10 h-8 bg-white text-gray-500 flex justify-center items-center'>
                    <AddIcon style={{ fontSize: '22px' }} />
                  </div>
                </div>
                <DownloadPhotoMenu />
              </div>
            </div>
          </ModalHeader>
        ) : (
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
          </Box>
        )}
        <ModalCloseButton position='fixed' left={0} top={0} color='white' fontSize={'13px'} />
        <ModalBody padding={0}>
          {photo.id ? (
            <div className='flex flex-col justify-start items-center'>
              <div
                onMouseOver={() => setShowImageOptions(true)}
                onMouseLeave={() => setShowImageOptions(false)}
                className={`relative ${isImageExpanded ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsImageExpanded((prev) => !prev)}
              >
                <img
                  className={`${isImageExpanded ? 'w-full' : 'w-fit'}`}
                  src={isImageExpanded ? photo?.urls?.full : photo?.urls?.small}
                />
                {showImageOptions && (
                  <div className='absolute text-white top-4 right-5 transition-all ease-linear duration-75'>
                    {isImageExpanded ? (
                      <CloseFullscreenIcon style={{ fontSize: '20px' }} />
                    ) : (
                      <OpenInFullIcon style={{ fontSize: '20px' }} />
                    )}
                  </div>
                )}
              </div>
              <div className='w-full m-2 p-2 sm:m-4 sm:p-4 '>
                <div className='grid grid-cols-6 items-start'>
                  <div className='col-span-3 sm:col-span-4 grid grid-cols-1 gap-1 sm:grid-cols-3'>
                    <div className='col-span-1'>
                      <p className='text-gray-500 text-sm'>Views</p>
                      <p>{photo.views}</p>
                    </div>
                    <div className='col-span-1'>
                      <p className='text-gray-500 text-sm'>Downloads</p>
                      <p>{photo.downloads}</p>
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                      <p className='text-gray-500 text-sm'>Featured in</p>
                      <p className='capitalize'>
                        {approvedTopicSubmissions.length > 0 ? approvedTopicSubmissions : 'Editorial'}
                      </p>
                    </div>
                  </div>
                  <div className='col-span-3 sm:col-span-2 flex items-center justify-end gap-x-2'>
                    <UnsplashButton>
                      <ReplyIcon style={{ fontSize: '20px' }} />
                      <span className='hidden sm:block'>&nbsp; Share</span>
                    </UnsplashButton>
                    <UnsplashButton>
                      <InfoIcon style={{ fontSize: '18px' }} />
                      <span className='hidden sm:block'>&nbsp; Info</span>
                    </UnsplashButton>
                    <UnsplashButton>
                      <MoreHorizIcon style={{ fontSize: '20px' }} />
                      &nbsp;
                    </UnsplashButton>
                  </div>
                </div>
                <br />
                <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                  <div className='col-span-3'>
                    <div className='flex items-center text-gray-500'>
                      <CalendarTodayIcon style={{ fontSize: '14px' }} />
                      <p className='ml-2 text-sm'> Published on {new Date(photo.created_at).toDateString()}</p>
                    </div>
                    <div className='flex items-center text-gray-500'>
                      <PhotoCameraIcon style={{ fontSize: '16px' }} />
                      <p className='ml-2 text-sm'> {photo?.exif?.name}</p>
                    </div>
                    <div className='flex items-center text-gray-500'>
                      <GppGoodIcon style={{ fontSize: '17px' }} />
                      <p className='ml-2 text-sm'>
                        {' '}
                        Free to use under the{' '}
                        <a className='cursor-pointer hover:text-gray-700 hover:underline'>Unsplash License</a>
                      </p>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <p className='text-sm'>{photo.description}</p>
                  </div>
                </div>
                <div className='mx-auto w-full 2xl:w-11/12 3xl:w-4/5'>
                  <p className='my-20 text-lg'>
                    Browse premium related images on iStock | Save 20% with code UNSPLASH20
                  </p>
                  <p className='text-lg'>Related tags</p>
                  <div className='my-6'>
                    <ImageTags tags={photo?.tags} />
                  </div>
                  <br />
                  <p className='text-lg'>Related collections</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-1 2xl:gap-4 my-6'>
                    {Object.values(photo.related_collections?.results || {}).map((collection: ICollection) => (
                      <CollectionPreviewCard collection={collection} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Box padding='6' boxShadow='lg' bg='white'>
              <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='2' />
              <br />
              <Skeleton height='100px' />
              <br />
              <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='2' />
              <br />
              <Skeleton height='100px' />
              <br />
              <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='2' />
              <br />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PhotoModal
