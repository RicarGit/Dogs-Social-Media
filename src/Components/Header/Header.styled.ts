import styled from "styled-components/macro"

export const Header = styled.header`
  width: 100%;
  position: fixed;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
  background-color: #fff;
  top: 0;
  height: 4rem;
  background-color: red;
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 0.5rem 0;
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
    background: url('Assets/usuario.svg') no-repeat center center;
    margin-left: 0.5rem;
  }
`