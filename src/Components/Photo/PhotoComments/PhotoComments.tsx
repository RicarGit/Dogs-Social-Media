import { PhotoCommentsType } from 'types/photoComments'
import * as S from './PhotoComments.styled'
import { CommentType } from 'types/photoComments'

interface PhotoCommentsInfo {
  id: number
  comments: CommentType[]
}

export const PhotoComments = ({ id, comments }: PhotoCommentsInfo) => {
  return (
    <div>PhotoComments</div>
  )
}
