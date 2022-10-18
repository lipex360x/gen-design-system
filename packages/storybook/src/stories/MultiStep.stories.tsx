import type { StoryObj, Meta } from '@storybook/react'
import { Container, MultiStep, MultiStepProps } from '@lipex360-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Container
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {Story()}
        </Container>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<MultiStepProps> = {}
