import * as S from './Header.styled'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from 'Assets/dogs.svg'

export const Header = () => {
  return (
    <S.Header>
      <S.Navigation>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">Login / Criar</Link>
      </S.Navigation>
    </S.Header>
  )
}