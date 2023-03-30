import * as S from './PhotoContent.styled'
import { useUserContext } from 'contexts/UserContext'
import { Link } from 'react-router-dom'
import { CommentsData } from 'types/photoComments'
import { Single } from 'types/single'

import { ImageSkeleton } from 'Components/ImageSkeleton'
import { PhotoComments } from '../PhotoComments/PhotoComments'
import { PhotoDelete } from '../PhotoDelete'

export const PhotoContent = ({ commentsData, single }: CommentsData & Single) => {
  const { photo, comments } = commentsData
  const { data } = useUserContext()

  return (
    <S.PhotoContent single={single} >
      <ImageSkeleton src={photo.src} alt={photo.title} />

      <S.Details single={single}>
        <S.Author>
          {data && data.username === photo.author
            ? <PhotoDelete userId={data.id} />
            : <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
          }
          <S.Views>{photo.acessos}</S.Views>
        </S.Author>

        <S.PostTitle>
          <Link to={`/foto/${photo.id}`} >{photo.title}</Link>
        </S.PostTitle>

        <S.AttributesList>
          <S.Attribute>{photo.peso} kg</S.Attribute>
          <S.Attribute>{`${photo.idade} ${Number(photo.idade) <= 1 ? 'ano' : 'anos'}`}</S.Attribute>
        </S.AttributesList>
      </S.Details>

      <PhotoComments id={photo.id} single={single} comments={comments} />
    </S.PhotoContent>
  )
}
