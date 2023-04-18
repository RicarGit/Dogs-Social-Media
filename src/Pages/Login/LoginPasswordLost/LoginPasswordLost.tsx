import { FormEvent } from 'react'
import { api } from 'services/api'
import { useForm, useFetch } from 'hooks'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

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
    <section className='animeLeft' >
      <Head title='Recupere a Senha' />
      <h1>Perdeu a senha?</h1>

      {data
        ? <p style={{ color: '#4c1' }}>Email enviado.</p>
        : <form onSubmit={handleSubmit}>
          <FormInput labelText='Email / Usuário' type='text' name='email' {...login} />
          {loading
            ? <Button disabled >Enviando...</Button>
            : <Button>Enviar Email</Button>
          }
        </form>
      }

      <ErrorInfo error={error} />
    </section>
  )
}
