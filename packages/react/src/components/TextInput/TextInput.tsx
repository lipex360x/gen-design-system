import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextInputProps = {
  prefix?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.Container>
  )
}
