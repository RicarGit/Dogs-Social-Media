import * as S from './LoginPasswordLost.styled'
import { FormEvent } from 'react'
import { useForm } from 'hooks/useForm'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'

import { FormInput } from 'Components/FormInput'
import { Button } from 'Components/Button'
import { ErrorInfo } from 'Components/ErrorInfo'
import { Head } from 'Components'

export const LoginPasswordLost = () => {
  const login = useForm('email')
  const { data, loading, error, request } = useFetch()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const resetUrl = window.location.href.replace('perdeu', 'resetar')

    if (login.validate()) {
      const { url, options } = api.PASSWORD_LOST({ login: login.value, url: resetUrl })
      await request(url, options)
    }
  }

  return (
    <S.LoginPasswordLost>
      <Head title='Recupere a Senha' />
      <S.PasswordLostTitle>
        Perdeu a senha?
      </S.PasswordLostTitle>
      {data
        ? <S.SendedEmailMessage>Email enviado.</S.SendedEmailMessage>
        : <S.PasswordLostForm onSubmit={handleSubmit}>
          <FormInput labelText='Email / Usuário' type='text' name='email' {...login} />
          {loading
            ? <Button disabled >Enviando...</Button>
            : <Button>Enviar Email</Button>
          }
        </S.PasswordLostForm>
      }

      <ErrorInfo error={error} />
    </S.LoginPasswordLost>
  )
}
