import { User } from 'phosphor-react'
import { RefAttributes } from 'react'
import * as S from './styles'

export type AvatarProps = {
  src?: string
  alt?: string
} & RefAttributes<HTMLImageElement>

export const Avatar = (props: AvatarProps) => {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />

      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}
