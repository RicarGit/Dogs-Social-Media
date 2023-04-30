import * as S from './User.styled'
import { Route, Routes } from 'react-router-dom'
import { useContextStore } from 'contexts/useContextStore'

import { Feed, Head } from 'Components'
import { NotFound } from 'Pages/NotFound'
import { UserHeader, UserStats, UserPhotoPost } from './'

export const User = () => {
  const data = useContextStore(state => state.data)

  return (
    <S.UserSection>
      <Head title='Minha Conta' />
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
