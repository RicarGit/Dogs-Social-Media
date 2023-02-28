import * as S from './UserPhotoPost.styled'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getStorageToken } from 'contexts/UserContext'
import { api } from 'services/api'

import { useForm } from 'hooks/useForm'
import { useFetch } from 'hooks/useFetch'

import { Button } from 'Components/Button'
import { FormInput } from 'Components/FormInput'

interface ImageData {
  preview: string | null
  raw: File | null
}

export const UserPhotoPost = () => {
  const imgName = useForm('imgName')
  const weight = useForm('weight')
  const age = useForm('age')
  const [img, setImg] = useState<ImageData>({ preview: null, raw: null })
  const { data, error, loading, request } = useFetch()

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
      <S.UserPhotoPostForm onSubmit={handleSubmit}>
        <FormInput labelText='Nome' type='text' name='nome' {...imgName} />
        <FormInput labelText='Peso' type='number' name='peso' {...weight} />
        <FormInput labelText='Idade' type='number' name='idade' {...age} />
        <S.InputFile type='file' name='img' id='img' onChange={handleImgChange} />
        <Button>Enviar</Button>
      </S.UserPhotoPostForm>

      {img.preview && <S.ImagePreview preview={img.preview} alt='' />}
    </S.UserPhotoPostSection>
  )
}
