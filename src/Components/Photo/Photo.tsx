import * as S from './Photo.styled'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { api } from 'services/api'
import { useFetch } from 'hooks/useFetch'

import { ErrorInfo, Loading, Head } from 'Components'
import { PhotoContent } from './PhotoContent'

export const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    if (id) {
      const { url, options } = api.PHOTO_GET(Number(id))
      request(url, options)
    }
  }, [id, request])

  if (error) return <ErrorInfo error={error} />
  if (loading) return <Loading />

  return (
    <S.Photo>
      {data && 'photo' in data &&
        <>
          <Head title={data.photo.title} />
          <PhotoContent single={true} commentsData={data} />
        </>
      }
    </S.Photo>
  )
}
