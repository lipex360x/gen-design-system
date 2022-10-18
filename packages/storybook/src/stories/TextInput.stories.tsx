import type { StoryObj, Meta } from '@storybook/react'
import { Container, TextInput, TextInputProps, Text } from '@lipex360-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},

  decorators: [
    (Story) => {
      return (
        <Container
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Text size="sm">E-mail address</Text>
          {Story()}
        </Container>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
