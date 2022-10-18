import type { StoryObj, Meta } from '@storybook/react'
import { Container, Text } from '@lipex360-ui/react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>This is a Container</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}
