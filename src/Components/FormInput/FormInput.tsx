import * as S from './FormInput.styled'
import { forwardRef } from 'react'

import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormInputProps, FormInputTypes } from 'types/formTypes'

type RegisterType<T extends FieldValues> = ReturnType<UseFormRegister<T>>
type InputProps = FormInputProps & RegisterType<FormInputTypes>

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, name, onChange, onBlur }, ref) => {
    return (
      <S.InputContainer>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.Input
          name={name}
          id={name}
          type={type}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputContainer>
    )
  })
