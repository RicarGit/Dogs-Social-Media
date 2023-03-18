import * as S from './LoginForm.styled'
import { Link } from 'react-router-dom'
import { FormEvent } from 'react'

import { useUserContext } from 'contexts/UserContext'
import { useForm } from 'hooks/useForm'

import { FormInput } from 'Components/FormInput'
import { Error } from 'Components/Error'
import { Button } from 'Components/Button'

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm('password')
  const { userLogin, loading, error } = useUserContext()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    // username.validate() && password.validate()
    if (true) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <S.LoginFormContainer>
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
        {loading ?
          <Button disabled={true}>Carregando...</Button> :
          <Button>Entrar</Button>
        }
        <Error error={error} />
      </S.LoginForm>

      <Link className='lostAccount' to={'perdeu'}>Perdeu a Senha?</Link>
      <S.Register>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button>
          <Link className='createAccount' to={'criar'}>Cadastro</Link>
        </Button>
      </S.Register>
    </S.LoginFormContainer>
  )
}