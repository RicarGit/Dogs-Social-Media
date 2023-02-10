import * as S from './LoginForm.styled'
import { Link } from 'react-router-dom'
import { FormEvent } from 'react'
import { useContext } from 'react'

import { UserContext } from 'contexts/UserContext'
import { useForm } from 'hooks/useForm'

import { FormInput } from 'Components/FormInput'

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm('password')
  const context = useContext(UserContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    // username.validate() && password.validate()
    if (true) {
      context?.userLogin(username.value, password.value)
    }
  }

  return (
    <S.LoginSection className='animeLeft'>
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
        {context?.loading ?
          <S.LoginButton disabled>Carregando...</S.LoginButton> :
          <S.LoginButton>Entrar</S.LoginButton>
        }
        {context?.error && <p>{context.error}</p>}
      </S.LoginForm>

      <Link to={'criar'}>Cadastro</Link>
    </S.LoginSection>
  )
}