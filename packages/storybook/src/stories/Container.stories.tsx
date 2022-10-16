import type { StoryObj, Meta } from '@storybook/react'
import { Container, Text } from '@gen-ui/react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>This is a Container</Text>,
  },
} as Meta

export const Primary: StoryObj = {}
