import * as S from './LoginForm.styled'
import { Link } from 'react-router-dom'
import { FormEvent, useEffect } from 'react'

import { useForm } from 'hooks/useForm'
import { api } from 'services/api'

import { FormInput } from 'Components/FormInput'

// interface FetchData {
//   token: string
//   user_display_name: string
//   user_email: string
//   user_nicename: string
// }

const setStorageToken = (token: string) => {
  window.localStorage.setItem('token', token)
}

const getStorageToken = () => {
  return window.localStorage.getItem('token')
}

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm('password')

  useEffect(() => {
    const token = getStorageToken()
    if (token) {
      getUserData(token)
    }
  }, [])

  const getUserData = async (token: string) => {
    const { url, options } = api.USER_GET(token)

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = api.TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options)
      const data = await response.json()
      setStorageToken(data.token)

      return data
    }
  }

  return (
    <section>
      <h1>Login</h1>

      <S.LoginForm action='' onSubmit={handleSubmit}>
        <FormInput
          name='username'
          type='text'
          labelText='Usuário'
          {...username}
        />
        <FormInput
          name='password'
          type='text'
          labelText='Senha'
          {...password}
        />
        <S.LoginButton>Entrar</S.LoginButton>
      </S.LoginForm>

      <Link to={'criar'}></Link>
    </section>
  )
}