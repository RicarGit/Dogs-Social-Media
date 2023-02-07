import * as S from './LoginForm.styled'
import { Link } from 'react-router-dom'
import { FormEvent } from 'react'
import { useForm } from 'Hooks/useForm'

import { FormInput } from 'Components/FormInput'

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm('password')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => {
          console.log(response)
          return response.json
        })
        .catch(error => console.log(error))
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