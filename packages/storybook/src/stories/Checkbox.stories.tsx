import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps, Container, Text } from '@gen-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Container
          as="label"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '0.5rem',
          }}
        >
          {Story()}
          <Text size="sm">Terms of Use</Text>
        </Container>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<CheckboxProps> = {}
