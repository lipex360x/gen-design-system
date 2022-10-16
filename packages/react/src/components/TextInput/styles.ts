import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray900};
    padding: ${theme.space[3]} ${theme.space[4]};
    border-radius: ${theme.radii.sm};
    box-sizing: border-box;
    border: 2px solid ${theme.colors.gray900};

    display: flex;
    align-items: baseline;

    &:has(input:focus) {
      border-color: ${theme.colors.ignite300};
    }

    &:has(input:disabled) {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`

export const Prefix = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.default};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.gray400};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    all: unset;

    font-family: ${theme.fonts.default};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.white};

    background: transparent;
    width: 100%;

    &:disabled {
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`
