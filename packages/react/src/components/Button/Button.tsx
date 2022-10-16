import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  size: 'small' | 'big'
}

export const Button = ({ children, size = 'small' }: ButtonProps) => {
  return <S.Wrapper size={size}>{children}</S.Wrapper>
}
