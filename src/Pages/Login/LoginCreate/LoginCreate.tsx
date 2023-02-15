import * as S from './LoginCreate.styled'
import { FormEvent, useContext } from 'react'
import { UserContext } from 'contexts/UserContext'

import { Button } from 'Components/Button'
import { FormInput } from 'Components/FormInput'
import { useForm } from 'hooks/useForm'
import { api } from 'services/api'

export const LoginCreate = () => {
  const username = useForm('username')
  const email = useForm('email')
  const password = useForm('password')

  const context = useContext(UserContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const { url, options } = api.USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })

    try {
      const response = await fetch(url, options)

      if (response.ok) {
        context?.userLogin(username.value, password.value)
      }
    } catch (error) {
      console.error(error)

    }
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