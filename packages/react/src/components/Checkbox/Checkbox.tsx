import { Check } from 'phosphor-react'
import { RefAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = RefAttributes<HTMLButtonElement>

export const Checkbox = (props: CheckboxProps) => {
  return (
    <S.Container {...props}>
      <S.Indicator asChild>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  )
}
