import * as S from './FeedModal.styled'
import { useEffect, MouseEvent } from 'react'
import { useFetch } from 'hooks/useFetch'
import { PhotoData } from 'types/photoInfo'
import { SetModal } from 'types/setModal'
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

  const handleOutsideClick = ({ target, currentTarget }: MouseEvent) => {
    if (target && currentTarget && target === currentTarget) {
      setModal(null)
    }
  }

  return (
    <S.FeedModal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && ('comments' in data) && <PhotoContent commentsData={data} />}
    </S.FeedModal>
  )
}
