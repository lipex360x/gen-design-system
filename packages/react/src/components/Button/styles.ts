import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './Button'

export type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

const sizes = {
  sm: (theme: DefaultTheme) => css`
    height: 38px;
  `,

  md: (theme: DefaultTheme) => css`
    height: 46px;
  `,

  lg: (theme: DefaultTheme) => css``,
}

const variants = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.ignite500};

    &:not(:disabled):hover {
      background: ${theme.colors.ignite300};
    }

    &:disabled {
      background: ${theme.colors.gray200};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.ignite500};
    border: 2px solid ${theme.colors.ignite500};

    &:not(:disabled):hover {
      background: ${theme.colors.ignite500};
      color: ${theme.colors.white};
    }

    &:disabled {
      color: ${theme.colors.gray200};
      border-color: ${theme.colors.gray200};
    }
  `,

  tertiary: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray100};

    &:not(:disabled):hover {
      color: ${theme.colors.white};
    }

    &:disabled {
      color: ${theme.colors.gray600};
    }
  `,
}

export const ButtonBase = styled.button`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    box-sizing: border-box;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space[2]};

    min-width: 120px;
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.fonts.default};
    border-radius: ${theme.radii.sm};

    padding: 0 ${theme.space[2]};

    &:disabled {
      cursor: not-allowed;
    }
  `}
`

export const Wrapper = styled(ButtonBase)<WrapperProps>`
  ${({ theme, size, variant }) => css`
    ${variant && variants[variant](theme)}
    ${size && sizes[size](theme)}
  `}
`
