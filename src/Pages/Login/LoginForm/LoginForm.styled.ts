import styled from "styled-components/macro"

export const LoginFormContainer = styled.div`  
  .lostAccount {
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;

    &::after {
      content: '';
      height: 2px;
      width: 100%;
      display: block;
      background-color: currentColor;
    }
  }
`

export const LoginForm = styled.form`
  margin-bottom: 2rem;
`

export const Register = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background-color: #ddd;
      height: .5rem;
      width: 3rem;
      border-radius: .2rem;
    }
  }
`