import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@gen-ui/react'

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    children: 'Hello TextInput',
  },
} as Meta

export const Primary: StoryObj<TextInputProps> = {}
