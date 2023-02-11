import styled from "styled-components/macro"
import userIcon from 'assets/usuario.svg'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 1;
  `

export const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 800px;
  height: 4rem;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: .5rem 0;
  }

  .login {
    color: #333;
    display: flex;
    align-items: center;
  }

  .login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${userIcon}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`

export const LogoutButton = styled.button`

`