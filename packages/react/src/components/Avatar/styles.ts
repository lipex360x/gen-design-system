import * as Avatar from '@radix-ui/react-avatar'
import styled, { css } from 'styled-components'

export const AvatarContainer = styled(Avatar.Root)`
  ${({ theme }) => css`
    border-radius: ${theme.radii.full};
    display: inline-block;
    width: ${theme.space[12]};
    height: ${theme.space[12]};
    overflow: hidden;
  `}
`

export const AvatarImage = styled(Avatar.Image)`
  ${() => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  `}
`

export const AvatarFallback = styled(Avatar.Fallback)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray600};
    color: ${theme.colors.gray800};

    svg: {
      width: ${theme.space[6]};
      height: ${theme.space[6]};
    }
  `}
`
