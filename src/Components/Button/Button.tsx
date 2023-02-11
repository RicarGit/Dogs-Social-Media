import * as S from './Button.styled'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
}

export const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <S.Button disabled={disabled}>{children}</S.Button>
  )
}
