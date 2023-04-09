import * as S from './Footer.styled'
import { ReactComponent as Dogs } from 'assets/dogs-footer.svg'

export const Footer = () => {
  return (
    <S.Footer>
      <Dogs />
      <S.FooterCopyright>Dogs. Alguns direitos reservados.</S.FooterCopyright>
    </S.Footer>
  )
}
