import * as S from './FormInput.styled'
import { ChangeEvent } from 'react'

interface Input {
  name: string
  labelText: string
  type: string
  value: string
  error: string | null
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => boolean
  validate: () => boolean
}

export const FormInput = ({ name, labelText, type, value, onChange, onBlur, error }: Input) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{labelText}</S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  )
}
