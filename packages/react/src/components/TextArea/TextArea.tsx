import styled, { css } from 'styled-components'

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    all: unset;

    font-family: ${theme.fonts.default};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.white};

    background: ${theme.colors.gray900};
    border: 2px solid ${theme.colors.gray900};
    border-radius: ${theme.radii.sm};

    width: 100%;
    min-height: 80px;
    resize: vertical;
    box-sizing: border-box;
    padding: ${theme.space[3]} ${theme.space[4]};

    &:focus {
      border-color: ${theme.colors.ignite300};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`

TextArea.displayName = 'TextArea'
