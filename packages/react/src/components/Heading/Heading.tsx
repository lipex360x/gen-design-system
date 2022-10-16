import * as S from './styles'
import { ElementType, ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode
  size: 'xl' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  as?: ElementType
}

export const Heading = ({
  children,
  size = '2xl',
  as = 'h2',
}: HeadingProps) => {
  return (
    <S.Heading size={size} as={as}>
      {children}
    </S.Heading>
  )
}
