import * as S from './PhotoCommentsForm.styled'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ReactComponent as Enviar } from 'assets/enviar.svg'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'
import { getStorageToken } from 'contexts/UserContext'
import { PhotoCommentsType } from 'types/photoComments'
import { ErrorInfo } from 'Components/ErrorInfo'

interface CommentsFormId {
  id: number
  updateCommentaries: (comments: PhotoCommentsType) => void
}

export const PhotoCommentsForm = ({ id, updateCommentaries }: CommentsFormId) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  const setCommentary = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = target.value
    setComment(comment)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = getStorageToken()

    if (!token) {
      throw new Error('Faça login para comentar!')
    }

    const { url, options } = api.COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response && response.ok && json && 'comments' in json) {
      updateCommentaries(json.comments)
      setComment('')
    }
  }

  return (
    <S.PhotoCommentsForm onSubmit={handleSubmit}>
      <S.CommentsArea
        id='comment'
        name='comment'
        placeholder='Comente aqui...'
        value={comment}
        onChange={setCommentary}
      />

      <S.CommentsAreaButton>
        <Enviar />
      </S.CommentsAreaButton>

      <ErrorInfo error={error} />
    </S.PhotoCommentsForm>
  )
}
