import * as S from './LoginForm.styled'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormType, loginFormSchema } from 'types/formTypes'
import { useContextStore } from 'contexts/useContextStore'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

export const LoginForm = () => {
  const userLogin = useContextStore(useCallback(state => state.userLogin, []))
  const loading = useContextStore(state => state.loading)
  const error = useContextStore(state => state.error)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema)
  })

  const onSubmit = (data: LoginFormType) => {
    userLogin(data.username, data.password)
  }

  return (
    <S.LoginFormContainer className='animeLeft'>
      <Head title='Faça Login' />
      <h1>Login</h1>

      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          label='Usuário'
          error={errors.username?.message}
          {...register('username')}
        />

        <FormInput
          type='password'
          label='Senha'
          error={errors.password?.message}
          {...register('password')}
        />

        <Button disabled={loading}>{loading ? 'Carregando...' : 'Entrar'}</Button>
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