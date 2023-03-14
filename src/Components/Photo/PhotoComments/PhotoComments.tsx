import { PhotoCommentsType } from 'types/photoComments'
import * as S from './PhotoComments.styled'

interface PhotoCommentsInfo {
  id: number
  comments: PhotoCommentsType
}

export const PhotoComments = ({ id, comments }: PhotoCommentsInfo) => {
  return (
    <div>PhotoComments</div>
  )
}
