import * as S from './NotFound.styled'

export const NotFound = () => {
  return (
    <S.NotFound>
      <S.ErrorTitle>
        Erro: 404
      </S.ErrorTitle>

      <S.ErrorDescription>
        Página não encontrada.
      </S.ErrorDescription>
    </S.NotFound>
  )
}
