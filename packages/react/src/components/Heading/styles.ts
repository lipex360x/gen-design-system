import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from './Heading'

type HeadingSizes = Pick<HeadingProps, 'size'>

const setFontSize = {
  sizes: (theme: DefaultTheme, { size }: HeadingSizes) => css`
    font-size: ${theme.fontSizes[size]};
  `,
}

export const Heading = styled('h2').attrs<HeadingProps>(({ as }) => ({
  as,
}))<HeadingProps>`
  ${({ theme, size }) => css`
    margin: 0%;
    font-family: ${theme.fonts.default};
    line-height: ${theme.lineHeights.shorter};
    color: ${theme.colors.gray100};

    ${size && setFontSize.sizes(theme, { size })};
  `}
`
