import * as S from './styles'
import { fontSizes } from '@gen-ui/tokens'
import { ElementType, ReactNode } from 'react'

export type TextProps = {
  children: ReactNode
  size?: keyof typeof fontSizes
  as?: ElementType
}

export const Text = ({ children, size = 'md', as = 'p' }: TextProps) => {
  return (
    <S.Text size={size} as={as}>
      {children}
    </S.Text>
  )
}
