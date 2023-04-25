import styled from "styled-components/macro"

export const UserHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`

export const UserHeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background-color: #eee;
    border: 1px solid transparent;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background-color: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
   background-color: #fff;
   box-shadow: 0 0 0 3px #fea;
   border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background-color: #fff;
    border-radius: .2rem;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      box-shadow: none;
      padding: .5rem 0;
      cursor: pointer;
    }

    a:hover svg > *,
    button:hover svg > * {
      fill: #fb1;
    }

    a.active {
      box-shadow: none;
    }

    button {
      border-bottom: none;
    }

    svg {
      margin-right: .5rem;
    }
  }

  &.navMobileActive {
    transition: .3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }
`

export const MobileButton = styled.button`
  background-color: #eee;
  border: 1px solid transparent;
  border-radius: .2rem;
  height: 40px;
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .1s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
  }
  
  &:focus,
  &:hover{
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &.mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`