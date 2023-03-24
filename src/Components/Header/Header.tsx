import * as S from './Header.styled'
import { Link } from 'react-router-dom'
import { useUserContext } from 'contexts/UserContext'
import { ReactComponent as Dogs } from 'assets/dogs.svg'

export const Header = () => {
  const { data, login } = useUserContext()

  return (
    <S.Header>
      <S.Navigation>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data && login
          ? <Link className="login" to="/login">{data.username}</Link>
          : <Link className="login" to="/login">Login / Criar</Link>
        }
      </S.Navigation>
    </S.Header>
  )
}