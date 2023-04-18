import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from 'services/api'
import { useForm, useFetch } from 'hooks'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

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
    <section onSubmit={handleSubmit}>
      <Head title='Resete a Senha' />
      <h1>Resete a Senha</h1>

      <form>
        <FormInput labelText="Nova Senha" type="password" name="password" {...password} />
        {loading
          ? <Button disabled >Resetando...</Button>
          : <Button>Resetar</Button>
        }
      </form>

      <ErrorInfo error={error} />
    </section>
  )
}
