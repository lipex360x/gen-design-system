import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@gen-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
