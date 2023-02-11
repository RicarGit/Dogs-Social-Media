import * as S from './Button.styled'
import { ReactNode } from 'react'

interface Btn {
  children: ReactNode
  disabled?: boolean
}

export const Button = ({ children, disabled }: Btn) => {
  return (
    <S.Button disabled={disabled}>{children}</S.Button>
  )
}
