import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer } from '../../../interfaces/IReducer'
import { getPhotoById as getPhotoByIdAPI } from '../../API/Unsplash/Unsplash'
import { IPhoto } from '../../../interfaces/IPhoto'
import { getEditorialFeedPhotos, getPhotoById, getTopicPhotos } from '../../store/actions'
import { RouteComponentProps, useLocation, withRouter } from 'react-router-dom'
import UnsplashAwards from './components/UnsplashAwards'
import PhotoModal from './components/PhotoModal'
import EditorialPhotosFeed from './components/EditorialPhotosFeed'
import TopicPhotosFeed from './components/TopicPhotosFeed'
import EditorialBanner from './components/EditorialBanner'
import TopicBanner from './components/TopicBanner'

const EDITORIAL_FEED_BANNER_PHOTO_ID = 'dhgRwBZKKss' // Constant Photo ID since there is no API for editorial feed banner

const HomePage: React.FC<RouteComponentProps<any>> = (props) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const selectedTopic = useSelector((state: IReducer) => state.selectedTopic)
  const selectedPhoto = useSelector((state: IReducer) => state.selectedPhoto)
  const editorialFeedPhotos = useSelector((state: IReducer) => state.editorialFeedPhotos)
  const [bannerData, setBannerData] = useState<IPhoto>({} as IPhoto)

  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const toggleShowPhotoModal = () => setShowPhotoModal((prev) => !prev)

  const handleGetEditorialFeedBanner = () =>
    getPhotoByIdAPI(EDITORIAL_FEED_BANNER_PHOTO_ID, (err: string, responseData: IPhoto) => {
      setBannerData(responseData)
    })

  const handleGetEditorialFeedPhotos = () => dispatch(getEditorialFeedPhotos({ page: 1 }))

  const fetchMoreEditorialFeedPhotos = () =>
    dispatch(getEditorialFeedPhotos({ page: editorialFeedPhotos?.length / 10 + 1 }))

  const isHomePage: boolean = useMemo(() => location.pathname === '/', [location?.pathname])

  useEffect(() => {
    if (isHomePage) {
      handleGetEditorialFeedBanner()
      handleGetEditorialFeedPhotos()
    }
  }, [isHomePage])

  const fetchMoreSelectedTopicPhotos = () =>
    dispatch(getTopicPhotos({ topic: selectedTopic.slug, page: selectedTopic.photos.length / 10 + 1 }))

  useEffect(() => {
    if (props.match.params.topic) dispatch(getTopicPhotos({ topic: props.match.params.topic, page: 1 }))
  }, [props.match?.params?.topic])

  useEffect(() => {
    if (props.match.params.photo) handleSelectPhoto()
  }, [props.match?.params?.photo])

  const handleSelectPhoto = () => {
    dispatch(getPhotoById(props.match.params.photo))
    toggleShowPhotoModal()
  }

  return (
    <>
      {showPhotoModal && selectedPhoto && (
        <PhotoModal
          showPhotoModal={showPhotoModal}
          closePhotoModal={() => props.history.goBack()}
          photo={selectedPhoto}
        />
      )}
      <div className='pb-20'>
        {isHomePage ? (
          <EditorialBanner photo={bannerData} />
        ) : selectedTopic?.slug ? (
          <TopicBanner selectedTopic={selectedTopic} />
        ) : (
          ''
        )}
        <br />
        <br />
        <div className='w-full xl:w-10/12 2xl:w-9/12 px-0 md:px-4 2xl:md:px-16 mx-auto '>
          {isHomePage && (
            <>
              <UnsplashAwards />
              <br />
              <br />
            </>
          )}
          {isHomePage && editorialFeedPhotos?.length > 0 ? (
            <EditorialPhotosFeed
              editorialFeedPhotos={editorialFeedPhotos}
              fetchMoreEditorialFeedPhotos={fetchMoreEditorialFeedPhotos}
            />
          ) : (
            selectedTopic?.photos?.length > 0 && (
              <TopicPhotosFeed
                selectedTopic={selectedTopic}
                fetchMoreSelectedTopicPhotos={fetchMoreSelectedTopicPhotos}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default withRouter(HomePage)
