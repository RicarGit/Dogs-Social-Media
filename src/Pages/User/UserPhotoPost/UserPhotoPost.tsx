import * as S from './UserPhotoPost.styled'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { api } from 'services/api'
import { getStorageToken } from 'helpers/getStoregeToken'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'hooks/useForm'
import { useFetch } from 'hooks/useFetch'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

interface ImageData {
  preview: string | null
  raw: File | null
}

export const UserPhotoPost = () => {
  const [img, setImg] = useState<ImageData>({ preview: null, raw: null })
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  const imgName = useForm('imgName')
  const weight = useForm('weight')
  const age = useForm('age')

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const token = getStorageToken()
    const formData = new FormData()
    formData.append('img', img.raw as File)
    formData.append('nome', imgName.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)

    if (token) {
      const { url, options } = api.PHOTO_POST(formData, token)
      request(url, options)
    }
  }

  const handleImgChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]

      setImg({
        preview: URL.createObjectURL(file),
        raw: file
      })
    }
  }

  return (
    <S.UserPhotoPostSection className='animeLeft'>
      <Head title='Poste sua foto' />
        <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>

        <ErrorInfo error={error} />
      </form>

      {img.preview && <S.ImagePreview preview={img.preview} alt='' />}
    </S.UserPhotoPostSection>
  )
}
