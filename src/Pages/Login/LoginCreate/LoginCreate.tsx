import * as S from './LoginCreate.styled'
import { FormEvent } from 'react'

import { Button } from 'Components/Button'
import { FormInput } from 'Components/FormInput'
import { useForm } from 'hooks/useForm'
import { api } from 'services/api'

export const LoginCreate = () => {
  const username = useForm('username')
  const email = useForm('email')
  const password = useForm('password')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const { url, options } = api.USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })

    const response = await fetch(url, options)
    console.log(response)
  }

  return (
    <S.LoginCreate>
      <h1>Cadastre-se</h1>

      <S.LoginCreateForm onSubmit={handleSubmit}>
        <FormInput
          labelText='Usuário'
          type='text'
          name='username'
          {...username}
        />
        <FormInput
          labelText='Email'
          type='email'
          name='email'
          {...email}
        />
        <FormInput
          labelText='Senha'
          type='password'
          name='password'
          {...password}
        />
        <Button>Cadastrar</Button>
      </S.LoginCreateForm>
    </S.LoginCreate>
  )
}