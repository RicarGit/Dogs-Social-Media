import * as S from './Home.styled'
import { Feed, Head } from "Components"

export const Home = () => {
  return (
    <S.Home>
      <Head title='Fotos' description='Home do site dogs, com o feed de fotos.' />
      <Feed user={'0'} />
    </S.Home>
  )
}
