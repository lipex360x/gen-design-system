import styled, { css, DefaultTheme } from 'styled-components'
import { fontSizes } from '@lipex360-ui/tokens'
import { TextProps } from './Text'

const setFontSize = {
  sizes: (theme: DefaultTheme, size: keyof typeof fontSizes) => css`
    font-size: ${theme.fontSizes[size]};
  `,
}

export const Text = styled('p').attrs<TextProps>(({ as }) => ({
  as,
}))<TextProps>`
  ${({ theme, size }) => css`
    margin: 0%;
    font-family: ${theme.fonts.default};
    color: ${theme.colors.gray100};

    ${size && setFontSize.sizes(theme, size)};
  `}
`
