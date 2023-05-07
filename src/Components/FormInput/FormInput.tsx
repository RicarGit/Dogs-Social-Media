import * as S from './FormInput.styled'
import { forwardRef } from 'react'
import { LoginFormType, LoginCreateFormType, FormInputProps, RegisterType, PhotoPostFormType } from 'types/formTypes'

export const FormInput = forwardRef<HTMLInputElement, FormInputProps & RegisterType<LoginFormType | LoginCreateFormType | PhotoPostFormType>>(
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
