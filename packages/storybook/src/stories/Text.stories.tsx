import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gen-ui/react'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Hello Text',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}
