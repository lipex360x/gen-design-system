import styled, { css } from 'styled-components'

export type ContainerProps = {}

export const Container = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 300px;
    background: ${theme.colors.ignite300};
  `}
`
