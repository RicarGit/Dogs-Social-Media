import * as S from './Error.styled'

type ErrorMessage = {
  error: string | null
}

export const Error = ({ error }: ErrorMessage) => {
  if (!error) return null

  return (
    <S.Error>{error}</S.Error>
  )
}
