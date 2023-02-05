import styled from "styled-components/macro"

export const LoginForm = styled.form`
  
`

export const LoginButton = styled.button`
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-family: var(--type-first);
  border: none;
  border-radius: .4rem;
  background-color: #fb1;
  color: #764701;
  cursor: pointer;
  transition: .15s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea,
                0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: .5;
    box-shadow: none;
    cursor: wait;
  }
`