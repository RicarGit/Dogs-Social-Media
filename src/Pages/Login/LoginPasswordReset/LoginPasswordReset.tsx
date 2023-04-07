import * as S from './LoginPasswordReset.styled'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'hooks/useForm'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'

import { FormInput } from 'Components/FormInput'
import { Button } from 'Components/Button'
import { ErrorInfo } from 'Components/ErrorInfo'
import { Head } from 'Components'

export const LoginPasswordReset = () => {
  const [key, setKey] = useState('')
  const [login, setLogin] = useState('')
  const password = useForm('password')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (password.validate()) {
      const { url, options } = api.PASSWORD_RESET({ login, key, password: password.value })
      const { response } = await request(url, options)

      if (response?.ok) navigate('/login')
    }
  }

  return (
    <S.LoginPasswordReset onSubmit={handleSubmit}>
      <Head title='Resete a Senha' />
      <S.PasswordResetTitle>
        Reset a Senha
      </S.PasswordResetTitle>

      <S.PasswordResetForm>
        <FormInput labelText="Nova Senha" type="password" name="password" {...password} />
        {loading
          ? <Button disabled >Resetando...</Button>
          : <Button>Resetar</Button>
        }
      </S.PasswordResetForm>

      <ErrorInfo error={error} />
    </S.LoginPasswordReset>
  )
}
