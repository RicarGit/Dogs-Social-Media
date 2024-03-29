import * as S from './FeedModal.styled'
import { useEffect, MouseEvent } from 'react'

import { api } from 'services/api'
import { useFetch } from 'hooks/useFetch'
import { PhotoData, SetModal } from 'types'

import { ErrorInfo, Loading } from 'Components'
import { PhotoContent } from 'Components/Photo'

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
      {error && <ErrorInfo error={error} />}
      {loading && <Loading />}
      {data && 'photo' in data && ('comments' in data) && <PhotoContent commentsData={data} />}
    </S.FeedModal>
  )
}
