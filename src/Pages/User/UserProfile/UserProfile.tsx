import { Feed } from 'Components/Feed'
import { useParams } from 'react-router-dom'
import * as S from './UserProfile.styled'

export const UserProfile = () => {
  const { user } = useParams()

  return (
    <S.UserProfile>
      <S.UserTitle>{user}</S.UserTitle>
      {user && <Feed user={user} />}
    </S.UserProfile>
  )
}
