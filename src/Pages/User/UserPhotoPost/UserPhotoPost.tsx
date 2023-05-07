import * as S from './UserPhotoPost.styled'
import { ChangeEvent, useEffect, useState } from 'react'

import { api } from 'services/api'
import { getStorageToken } from 'helpers/getStoregeToken'
import { useNavigate } from 'react-router-dom'
import { useFetch } from 'hooks/useFetch'
import { useForm } from 'react-hook-form'
import { PhotoPostFormType } from 'types'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

interface ImageData {
  preview: string | null
  raw: File | null
}

export const UserPhotoPost = () => {
  const [img, setImg] = useState<ImageData>({ preview: null, raw: null })
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<PhotoPostFormType>()

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  const onSubmit = (data: PhotoPostFormType) => {
    const token = getStorageToken()
    const formData = new FormData()

    formData.append('img', data.image[0])
    formData.append('nome', data.name)
    formData.append('peso', String(data.weight))
    formData.append('idade', String(data.age))

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label='Nome' type='text' error={errors.name?.message} {...register('name')} />
        <FormInput label='Peso' type='number' error={errors.name?.message} {...register('weight')} />
        <FormInput label='Idade' type='number' error={errors.name?.message} {...register('age')} />
        <S.InputFile type='file' id='img' {...register('image', { onChange: handleImgChange })} />

        <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>
        <ErrorInfo error={error} />
      </form>

      {img.preview && <S.ImagePreview preview={img.preview} alt='' />}
    </S.UserPhotoPostSection>
  )
}
