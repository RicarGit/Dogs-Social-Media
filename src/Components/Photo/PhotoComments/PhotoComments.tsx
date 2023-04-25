import * as S from './PhotoComments.styled'
import { useEffect, useRef, useState } from 'react'

import { CommentType, Single } from 'types'
import { useUserContext } from 'contexts/UserContext'

import { PhotoCommentsForm } from './PhotoCommentsForm'

interface PhotoCommentsInfo extends Single {
  id: number
  comments: CommentType[]
}

export const PhotoComments = ({ id, comments, single }: PhotoCommentsInfo) => {
  const [commentaries, setCommentaries] = useState(comments)
  const commentSection = useRef<HTMLUListElement>(null)
  const { login } = useUserContext()

  useEffect(() => {
    const commentListElement = commentSection.current

    if (commentListElement) {
      commentListElement.scrollTop = commentListElement.scrollHeight
    }
  }, [commentaries])

  const updateCommentaries = (comments: CommentType) => {
    setCommentaries(prevState => [...prevState, comments])
  }

  return (
    <>
      <S.PhotoComments single={single} ref={commentSection}>
        {commentaries.map(comment => (
          <S.PhotoComment key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </S.PhotoComment>
        ))}
      </S.PhotoComments>

      {login &&
        <PhotoCommentsForm single={single} id={id} updateCommentaries={updateCommentaries} />
      }
    </>
  )
}
