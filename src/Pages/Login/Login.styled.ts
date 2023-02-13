import styled from "styled-components/macro"
import bgDogLogin from 'assets/login.jpg'

export const Login = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${bgDogLogin}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`

export const FormsContainer = styled.div`
  max-width: 30rem;
  padding: 1rem;
  opacity: 0;
  transform: translateX(-50px);
  animation: animeLeft .3s forwards;

  @media (max-width: 50rem) {
    max-width: 100%;
  }
`