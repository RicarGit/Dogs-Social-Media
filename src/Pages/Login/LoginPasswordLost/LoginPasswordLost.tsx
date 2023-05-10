import { api } from 'services/api'
import { useFetch } from 'hooks'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormEmailType, emailSchema } from 'types'

import { Head, Button, FormInput, ErrorInfo } from 'Components'

export const LoginPasswordLost = () => {
  const { data, loading, error, request } = useFetch()
  const { handleSubmit, register, formState: { errors } } = useForm<FormEmailType>({
    resolver: zodResolver(emailSchema)
  })

  const onSubmit = ({ email }: FormEmailType) => {
    const resetUrl = window.location.href.replace('perdeu', 'resetar')

    if (email) {
      const { url, options } = api.PASSWORD_LOST({ login: email, url: resetUrl })
      request(url, options)
    }
  }

  return (
    <section className='animeLeft' >
      <Head title='Recupere a Senha' />
      <h1>Perdeu a senha?</h1>

      {data
        ? <p style={{ color: '#4c1' }}>Email enviado.</p>
        : <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='Email / Usuário'
            type='text'
            error={errors.email?.message}
            {...register('email')}
          />

        </form>
      }

      <ErrorInfo error={error} />
    </section>
  )
}
