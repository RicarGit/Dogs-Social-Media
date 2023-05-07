import { useCallback } from 'react'

import { api } from 'services/api'
import { useFetch } from 'hooks'
import { useContextStore } from 'contexts/useContextStore'

import { Head, Button, FormInput, ErrorInfo } from 'Components'
import { useForm } from 'react-hook-form'
import { LoginCreateFormType, loginCreateSchema } from 'types/formTypes'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginCreate = () => {
  const { loading, error, request } = useFetch()
  const userLogin = useContextStore(useCallback(state => state.userLogin, []))

  const { register, handleSubmit, formState: { errors } } = useForm<LoginCreateFormType>({
    resolver: zodResolver(loginCreateSchema)
  })

  const onSubmit = async (data: LoginCreateFormType) => {
    const userData = {
      username: data.username,
      password: data.password,
      email: data.email
    }
    const { url, options } = api.USER_POST(userData)

    try {
      const { response } = await request(url, options)

      if (response?.ok) {
        userLogin(data.username, data.password)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Crie Sua Conta' />
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Usuário'
          type='text'
          error={errors.username?.message}
          {...register('username')}
        />

        <FormInput
          label='Email'
          type='email'
          error={errors.email?.message}
          {...register('email')}
        />

        <FormInput
          label='Senha'
          type='password'
          error={errors.password?.message}
          {...register('password')}
        />

        <Button disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>

        <ErrorInfo error={error} />
      </form>
    </section>
  )
}