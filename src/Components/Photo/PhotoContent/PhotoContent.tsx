import { Link } from 'react-router-dom'
import { CommentsData } from 'types/photoComments'
import { PhotoComments } from '../PhotoComments/PhotoComments'
import * as S from './PhotoContent.styled'

export const PhotoContent = ({ commentsData }: CommentsData) => {
  const { photo, comments } = commentsData

  return (
    <S.PhotoContent>
      <S.PhotoImage src={photo.src} alt={photo.title} />
      <S.DetailsContainer>
        <S.Details>
          <p>
            <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
            <S.Accesses>{photo.acessos}</S.Accesses>
          </p>

          <S.PostTitle>
            <Link to={`/foto/${photo.id}`} >{photo.title}</Link>
          </S.PostTitle>

          <S.AttributesList>
            <S.Attribute>{photo.peso} kg</S.Attribute>
            <S.Attribute>{`${photo.idade} ${Number(photo.idade) <= 1 ? 'ano' : 'anos'}`}</S.Attribute>
          </S.AttributesList>
        </S.Details>
      </S.DetailsContainer>

      <PhotoComments id={photo.id} comments={comments} />
    </S.PhotoContent>
  )
}
