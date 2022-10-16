import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

type WrapperProps = Omit<ButtonProps, 'children'>

const buttonSizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.space[2]} ${theme.space[4]};
  `,

  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.md};
    padding: ${theme.space[3]} ${theme.space[6]};
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.fonts.default};
    background: ${theme.colors.ignite300};
    border-radius: ${theme.radii.sm};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    border: 0;

    ${size && buttonSizes[size](theme)}
  `}
`
