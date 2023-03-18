import * as S from './Header.styled'
import { Link } from 'react-router-dom'
import { useUserContext } from 'contexts/UserContext'

import { ReactComponent as Dogs } from 'assets/dogs.svg'

export const Header = () => {
  const { data, userLogout } = useUserContext()

  return (
    <S.Header>
      <S.Navigation>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
            <S.LogoutButton onClick={userLogout}>Sair</S.LogoutButton>
          </Link>
        ) : (
          <Link className="login" to="/login">Login / Criar</Link>
        )}

      </S.Navigation>
    </S.Header>
  )
}