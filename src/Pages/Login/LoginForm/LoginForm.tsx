import * as S from './LoginForm.styled'
import { Link } from 'react-router-dom'
import { FormEvent } from 'react'
import { useForm } from 'Hooks/useForm'

import { FormInput } from 'Components/FormInput'

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm('password')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = api.TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options)
      const data = await response.json()

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