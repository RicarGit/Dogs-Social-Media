import * as S from './Header.styled'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from 'contexts/UserContext'

import { ReactComponent as Dogs } from 'assets/dogs.svg'

export const Header = () => {
  const context = useContext(UserContext)

  return (
    <S.Header>
      <S.Navigation>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {context ? (
          <Link className="login" to="/conta">{context.data?.nome}</Link>
        ) : (
          <Link className="login" to="/login">'Login / Criar'</Link>
        )}

      </S.Navigation>
    </S.Header>
  )
}