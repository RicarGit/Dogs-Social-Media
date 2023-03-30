import * as S from './PhotoCommentsForm.styled'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ReactComponent as Enviar } from 'assets/enviar.svg'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'
import { getStorageToken } from 'contexts/UserContext'
import { CommentType } from 'types/photoComments'
import { ErrorInfo } from 'Components/ErrorInfo'
import { Single } from 'types/single'

interface CommentsFormId {
  id: number
  updateCommentaries: (comments: CommentType) => void
}

export const PhotoCommentsForm = ({ id, updateCommentaries, single }: CommentsFormId & Single) => {
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
    if (response && response.ok && json && 'comment_content' in json) {
      setComment('')
      updateCommentaries(json)
    }
  }

  return (
    <S.PhotoCommentsForm single={single} onSubmit={handleSubmit}>
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
