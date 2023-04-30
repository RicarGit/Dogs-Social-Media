import * as S from './UserHeader.styled'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useContextStore } from 'contexts/useContextStore'
import { useMedia } from 'hooks/useMedia'

import { ReactComponent as MyFeedIcon } from 'assets/feed.svg'
import { ReactComponent as StatsIcon } from 'assets/estatisticas.svg'
import { ReactComponent as AddPhotoIcon } from 'assets/adicionar.svg'
import { ReactComponent as LogoutIcon } from 'assets/sair.svg'

export const UserHeader = () => {
  const [title, setTitle] = useState('')
  const [menuMobile, setMenuMobile] = useState(false)

  const userLogout = useContextStore(useCallback(state => state.userLogout, []))
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const mobile = useMedia('(max-width: 40rem)')

  useEffect(() => {
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      default:
        setTitle('Minha Conta')
        break
    }

    setMenuMobile(false)
  }, [pathname])

  return (
    <S.UserHeader>
      <h1 className='title'>{title}</h1>

      {mobile &&
        <S.MobileButton
          aria-label='Menu'
          className={menuMobile ? 'mobileButtonActive' : ''}
          onClick={() => setMenuMobile(!menuMobile)}
        />}

      <S.UserHeaderNav className={`${mobile ? 'navMobile' : ''} ${menuMobile ? 'navMobileActive' : ''}`}>
        <NavLink to={'/conta'} end>
          <MyFeedIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to={'/conta/estatisticas'}>
          <StatsIcon />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to={'/conta/postar'}>
          <AddPhotoIcon />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </S.UserHeaderNav>
    </S.UserHeader>
  )
}
