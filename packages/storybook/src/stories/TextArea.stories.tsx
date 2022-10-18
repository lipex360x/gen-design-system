import type { StoryObj, Meta } from '@storybook/react'
import { Container, Text, TextArea } from '@lipex360-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Container
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Container>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}
