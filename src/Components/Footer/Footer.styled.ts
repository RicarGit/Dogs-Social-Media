import styled from "styled-components/macro"

export const Footer = styled.footer`
  background-color: #fb1;
  height: 10rem;
  padding: 3rem 1rem 0 1rem;
  text-align: center;
  color: #764701;

  @media (max-width: 40rem) {
    height: 8rem;
    padding: 2rem;
  }
`

export const FooterCopyright = styled.p`
  margin-top: 1rem;
`