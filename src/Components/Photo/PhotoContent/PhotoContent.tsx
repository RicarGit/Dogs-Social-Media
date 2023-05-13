import * as S from './PhotoContent.styled'
import { Link } from 'react-router-dom'

import { CommentsData, Single } from 'types'
import { useContextStore } from 'contexts/useContextStore'

import { ImageSkeleton } from 'Components'
import { PhotoComments, PhotoDelete } from 'Components/Photo'

export const PhotoContent = ({ commentsData, single }: CommentsData & Single) => {
  const { photo, comments } = commentsData
  const data = useContextStore(state => state.data)

  return (
    <S.PhotoContent single={single} >
      <ImageSkeleton src={photo.src} alt={photo.title} />

      <S.Details single={single}>
        <S.Author>
          {data && data.username === photo.author
            ? <PhotoDelete userId={photo.id} />
            : <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
          }
          <S.Views>{photo.acessos}</S.Views>
        </S.Author>

        <h1>
          <Link to={`/foto/${photo.id}`} >{photo.title}</Link>
        </h1>

        <S.AttributesList>
          <S.Attribute>{photo.peso} kg</S.Attribute>
          <S.Attribute>{`${photo.idade} ${Number(photo.idade) <= 1 ? 'ano' : 'anos'}`}</S.Attribute>
        </S.AttributesList>
      </S.Details>

      <PhotoComments id={photo.id} single={single} comments={comments} />
    </S.PhotoContent>
  )
}
