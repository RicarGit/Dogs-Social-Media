import * as S from './FeedModal.styled'
import { useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import { PhotoInfo } from 'types/photoInfo'
import { api } from 'services/api'

export const FeedModal = ({ photo }: PhotoInfo) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = api.PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <S.FeedModal>
      FeedModal
    </S.FeedModal>
  )
}
