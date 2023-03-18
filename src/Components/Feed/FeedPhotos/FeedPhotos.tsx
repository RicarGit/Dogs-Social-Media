import * as S from './FeedPhotos.styled'
import { useEffect } from "react"
import { useFetch } from "hooks/useFetch"
import { api } from "services/api"

import { FeedPhotosItem } from "./FeedPhotosItem"
import { ErrorInfo } from "Components/ErrorInfo"
import { Loading } from "Components/Loading"
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
