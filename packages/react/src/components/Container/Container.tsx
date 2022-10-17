import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[4]};
    border-radius: ${theme.radii.md};
    background: ${theme.colors.gray800};
    border: 1px solid ${theme.colors.gray600};
  `}
`
Container.displayName = 'Container'
