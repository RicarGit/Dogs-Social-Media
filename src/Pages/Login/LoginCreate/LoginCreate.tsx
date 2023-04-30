import { FormEvent, useCallback } from 'react'

import { api } from 'services/api'
import { useForm, useFetch } from 'hooks'
import { useContextStore } from 'contexts/useContextStore'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

export const LoginCreate = () => {
  const username = useForm('username')
  const email = useForm('email')
  const password = useForm('password')

  const userLogin = useContextStore(useCallback(state => state.userLogin, []))
  const { loading, error, request } = useFetch()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const { url, options } = api.USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })

    try {
      const { response } = await request(url, options)

      if (response?.ok) {
        userLogin(username.value, password.value)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Crie Sua Conta' />
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
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
        {loading
          ? <Button disabled>Cadastrando...</Button>
          : <Button>Cadastrar</Button>
        }
        <ErrorInfo error={error} />
      </form>
    </section>
  )
}