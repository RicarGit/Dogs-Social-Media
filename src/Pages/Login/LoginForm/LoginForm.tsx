import * as S from './LoginForm.styled'
import { FormEvent, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useContextStore } from 'contexts/useContextStore'
import { useForm } from 'hooks/useForm'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

export const LoginForm = () => {
  const username = useForm('username')
  const password = useForm('password')

  const userLogin = useContextStore(useCallback(state => state.userLogin, []))
  const loading = useContextStore(state => state.loading)
  const error = useContextStore(state => state.error)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <S.LoginFormContainer className='animeLeft'>
      <Head title='Faça Login' />
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

        <Button disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>

        <ErrorInfo error={error && 'Email ou senha incorreto.'} />
      </S.LoginForm>

      <Link className='lostAccount' to={'perdeu'}>Perdeu a Senha?</Link>
      <S.Register>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className='createAccount' to={'criar'}>
          <Button>Cadastro</Button>
        </Link>

      </S.Register>
    </S.LoginFormContainer>
  )
}