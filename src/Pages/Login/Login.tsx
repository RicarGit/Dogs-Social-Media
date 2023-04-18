import * as S from './Login.styled'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useUserContext } from 'contexts/UserContext'

import { LoginCreate, LoginForm, LoginPasswordLost, LoginPasswordReset } from './'
import { NotFound } from 'Pages'

export const Login = () => {
  const { login } = useUserContext()
  if (login) return <Navigate to={'/conta'} />

  return (
    <S.Login>
      <S.FormsContainer>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.FormsContainer>
    </S.Login>
  )
}