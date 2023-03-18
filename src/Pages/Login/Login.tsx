import * as S from './Login.styled'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useUserContext } from 'contexts/UserContext'

import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate'
import { LoginPasswordLost } from './LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset'

export const Login = () => {
  const { login } = useUserContext()
  if (login) return <Navigate to={'/conta'} />

  return (
    <S.Login>
      <S.FormsContainer className='animeLeft'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
        </Routes>
      </S.FormsContainer>
    </S.Login>
  )
}