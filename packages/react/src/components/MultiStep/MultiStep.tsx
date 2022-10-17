import * as S from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <S.Container>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>

      <S.Steps size={size}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step}></S.Step>
        })}
      </S.Steps>
    </S.Container>
  )
}
