import * as S from './FeedModal.styled'
import { useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import { PhotoData } from 'types/photoInfo'
import { api } from 'services/api'
import { Error } from 'Components/Error'
import { Loading } from 'Components/Loading'
import { PhotoContent } from 'Components/Photo/PhotoContent'

interface Modal extends PhotoData {
  setModal: SetModal
}

export const FeedModal = ({ photo, setModal }: Modal) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = api.PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <S.FeedModal>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && ('comments' in data) && <PhotoContent commentsData={data} />}
    </S.FeedModal>
  )
}
