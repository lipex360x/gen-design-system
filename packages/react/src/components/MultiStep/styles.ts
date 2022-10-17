import styled, { css } from 'styled-components'
import { MultiStepProps } from './MultiStep'

export const Container = styled.div`
  ${({ theme }) => css``}
`
export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    font-family: ${theme.fonts.default};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.gray200};
  `}
`

type StepsProps = Pick<MultiStepProps, 'size'>

export const Steps = styled.div<StepsProps>`
  ${({ theme, size }) => css`
    display: grid;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[1]};

    grid-template-columns: repeat(${size}, 1fr);
  `}
`

type StepProps = {
  active: boolean
}

export const Step = styled.div<StepProps>`
  ${({ theme, active }) => css`
    border-radius: ${theme.radii.px};
    height: ${theme.space[1]};
    background: ${active ? theme.colors.gray100 : theme.colors.gray600};
  `}
`
