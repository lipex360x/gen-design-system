import {
  ElementType,
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
} from 'react'

import * as S from './styles'

type ButtonsTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  as?: ElementType
} & ButtonsTypes

export const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => (
  <S.Container variant={variant} size={size} {...props}>
    {children}
  </S.Container>
)
