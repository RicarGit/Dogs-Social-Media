import * as S from './FormInput.styled'
import { ChangeEvent } from 'react'

interface Input {
  name: string
  labelText: string
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ name, labelText, type, value, onChange }: Input) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{labelText}</S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
      <S.ErrorMessage className='hidden'>Error</S.ErrorMessage>
    </S.InputContainer>
  )
}
