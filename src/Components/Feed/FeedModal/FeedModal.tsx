import * as S from './FeedModal.styled'
import { useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import { PhotoData } from 'types/photoInfo'
import { api } from 'services/api'

export const FeedModal = ({ photo }: PhotoData) => {
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
