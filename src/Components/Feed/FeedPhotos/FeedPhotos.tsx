import * as S from './FeedPhotos.styled'
import { useEffect } from "react"

import { api } from "services/api"
import { useFetch } from "hooks/useFetch"
import { SetModalProps } from 'types/setModal'

import { FeedPhotosItem } from "./FeedPhotosItem"
import { ErrorInfo, Loading } from "Components"

interface UserFeed extends SetModalProps {
  user: string
  page: number
  finalPage: () => void
}

export const FeedPhotos = ({ setModal, user, page, finalPage }: UserFeed) => {
  const { data, error, loading, request } = useFetch()
  const photosPerPage = 6

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = api.PHOTOS_GET({ page, photosPerPage, user })
      const { response, json } = await request(url, options)

      if (response && response.ok && json && Array.isArray(json) && json.length < photosPerPage) {
        finalPage()
      }
    }

    fetchPhotos()
  }, [request, user, page, finalPage])

  if (error) return <ErrorInfo error={error} />
  if (loading) return <Loading />
  if (!data) return null

  return (
    <S.PhotoList className='animeLeft'>
      {Array.isArray(data) && data.map(photo =>
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModal={setModal}
        />
      )}
    </S.PhotoList>
  )
}
