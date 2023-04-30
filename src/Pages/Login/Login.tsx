import * as S from './Login.styled'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useContextStore } from 'contexts/useContextStore'

import { LoginCreate, LoginForm, LoginPasswordLost, LoginPasswordReset } from './'
import { NotFound } from 'Pages'

export const Login = () => {
  const login = useContextStore(state => state.login)
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