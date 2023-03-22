import * as S from './PhotoComments.styled'
import { useEffect, useRef, useState } from 'react'
import { CommentType } from 'types/photoComments'
import { useUserContext } from 'contexts/UserContext'

import { PhotoCommentsForm } from './PhotoCommentsForm'

interface PhotoCommentsInfo {
  id: number
  comments: CommentType[]
}

export const PhotoComments = ({ id, comments }: PhotoCommentsInfo) => {
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
      <S.PhotoComments ref={commentSection}>
        {commentaries.map(comment => (
          <S.PhotoComment key={comment.comment_ID}>
            <S.CommentAuthor>{comment.comment_author}: </S.CommentAuthor>
            <S.CommentContent>{comment.comment_content}</S.CommentContent>
          </S.PhotoComment>
        ))}
      </S.PhotoComments>

      {login && <PhotoCommentsForm id={id} updateCommentaries={updateCommentaries} />}
    </>
  )
}
