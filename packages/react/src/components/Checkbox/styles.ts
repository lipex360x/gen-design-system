import styled, { css, keyframes } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const Container = styled(Checkbox.Root)`
  ${({ theme }) => css`
    all: unset;

    width: ${theme.space[6]};
    height: ${theme.space[6]};
    background: ${theme.colors.gray900};
    line-height: 0;

    border-radius: ${theme.radii.xs};
    border: 2px solid ${theme.colors.gray900};

    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      border: 2px solid ${theme.colors.ignite300};
    }

    &[data-state='checked'] {
      background: green;
    }
  `}
`

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }; 

  100% {
    opacity: 1;
    transform: translateY(0%);
  } 
`

const slideOut = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0%);
  };

  100% {
    opacity: 0;
    transform: translateY(100%);
  } 
`

export const Indicator = styled(Checkbox.Indicator)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: ${theme.space[4]};
    height: ${theme.space[4]};

    &[data-state='checked'] {
      animation: ${slideIn} 200ms ease-out;
    }

    &[data-state='unchecked'] {
      animation: ${slideOut} 200ms ease-out;
    }
  `}
`
