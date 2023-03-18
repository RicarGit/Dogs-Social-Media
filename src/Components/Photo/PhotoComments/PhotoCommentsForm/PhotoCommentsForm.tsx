import * as S from './PhotoCommentsForm.styled'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ReactComponent as Enviar } from 'assets/enviar.svg'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'
import { getStorageToken } from 'contexts/UserContext'
import { ErrorInfo } from 'Components/ErrorInfo'

interface CommentsFormId {
  id: number
}

export const PhotoCommentsForm = ({ id }: CommentsFormId) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  const setCommentary = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = target.value
    setComment(comment)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = getStorageToken()

    if (token) {
      const { url, options } = api.COMMENT_POST(id, { comment }, token)
      await request(url, options)
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
