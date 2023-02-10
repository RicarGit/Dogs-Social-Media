import * as S from './Login.styled'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from 'contexts/UserContext'

import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate'
import { LoginPasswordLost } from './LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset'

export const Login = () => {
  const context = useContext(UserContext)
  if (context?.login) return <Navigate to={'/conta'} />

  return (
    <S.Login>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='perdeu' element={<LoginPasswordLost />} />
        <Route path='resetar' element={<LoginPasswordReset />} />
      </Routes>
    </S.Login>
  )
}