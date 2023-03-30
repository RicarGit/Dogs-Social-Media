import * as S from './User.styled'
import { Route, Routes } from 'react-router-dom'

import { Feed } from 'Components/Feed'
import { UserHeader } from './UserHeader'
import { UserStats } from './UserStats'
import { UserPhotoPost } from './UserPhotoPost'
import { useUserContext } from 'contexts/UserContext'
import { NotFound } from 'Pages/NotFound'

export const User = () => {
  const { data } = useUserContext()

  return (
    <S.UserSection>
      <UserHeader />

      <Routes>
        <Route path='/' element={<Feed user={data ? data.id : ''} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </S.UserSection>
  )
}
