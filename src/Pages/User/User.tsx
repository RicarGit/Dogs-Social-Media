import * as S from './User.styled'
import { Route, Routes } from 'react-router-dom'

import { Feed } from 'Components/Feed'
import { UserHeader } from './UserHeader'
import { UserStats } from './UserStats'
import { UserPhotoPost } from './UserPhotoPost'
import { useUserContext } from 'contexts/UserContext'

export const User = () => {
  const { data } = useUserContext()

  return (
    <S.UserSection>
      <UserHeader />

      <Routes>
        <Route path='/' element={<Feed user={data ? data.id : ''} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </S.UserSection>
  )
}
