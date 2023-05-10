import { useEffect, useState } from 'react'

import { api } from 'services/api'
import { useFetch } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { passwordSchema, FormPasswordType } from 'types'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

export const LoginPasswordReset = () => {
  const [key, setKey] = useState('')
  const [login, setLogin] = useState('')
  const { error, loading, request } = useFetch()
  const { handleSubmit, register, formState: { errors } } = useForm<FormPasswordType>({
    resolver: zodResolver(passwordSchema)
  })

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const onSubmit = async ({ password }: FormPasswordType) => {
    if (password) {
      const { url, options } = api.PASSWORD_RESET({ login, key, password })
      const { response } = await request(url, options)

      if (response?.ok) navigate('/login')
    }
  }

  return (
    <section onSubmit={handleSubmit(onSubmit)}>
      <Head title='Resete a Senha' />
      <h1>Resete a Senha</h1>

      <form>
        <FormInput
          label="Nova Senha"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />

      </form>

      <ErrorInfo error={error} />
    </section>
  )
}
