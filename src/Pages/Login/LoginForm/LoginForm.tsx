import * as S from './LoginForm.styled'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { FormInput } from 'Components/FormInput'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

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

  return (
    <section>
      <h1>Login</h1>

      <S.LoginForm action='' onSubmit={handleSubmit}>
        <FormInput
          name='username'
          type='text'
          labelText='Usuário'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <FormInput
          name='password'
          type='text'
          labelText='Senha'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <S.LoginButton>Entrar</S.LoginButton>
      </S.LoginForm>

      <Link to={'criar'}></Link>
    </section>
  )
}