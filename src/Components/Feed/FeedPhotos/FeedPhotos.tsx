import * as S from './FeedPhotos.styled'
import { useEffect } from "react"
import { useFetch } from "hooks/useFetch"
import { api } from "services/api"

import { FeedPhotosItem } from "./FeedPhotosItem"
import { Error } from "Components/Error"
import { Loading } from "Components/Loading"
import { PhotoInfo } from 'types/photoInfo'
import { SetModalProps } from 'types/setModal'

export const FeedPhotos = ({ setModal }: SetModalProps) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = api.PHOTOS_GET({ page: 1, total: 12, user: '0' })
      const { response, json } = await request(url, options)
    }

    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (!data) return null

  const isPhotoInfo = (data: unknown): data is PhotoInfo[] => {
    if (data && Array.isArray(data) && typeof data[0] === 'object' && 'id' in data[0]) {
      return true
    } else {
      return false
    }
  }

  return (
    <S.PhotoList className='animeLeft'>
      {isPhotoInfo(data) && data.map(photo =>
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModal={setModal}
        />
      )}
    </S.PhotoList>
  )
}
