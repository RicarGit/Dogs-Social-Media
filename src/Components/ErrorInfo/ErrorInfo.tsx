import * as S from './ErrorInfo.styled'

type ErrorMessage = {
  error: string | null
}

export const ErrorInfo = ({ error }: ErrorMessage) => {
  if (!error) return null

  return (
    <S.ErrorInfo>{error}</S.ErrorInfo>
  )
}
