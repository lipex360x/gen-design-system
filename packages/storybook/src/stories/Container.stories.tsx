import type { StoryObj, Meta } from '@storybook/react'
import { Container, ContainerProps, Text } from '@gen-ui/react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>Teste</Text>,
  },
} as Meta

export const Primary: StoryObj<ContainerProps> = {}

export const WithFallback: StoryObj<ContainerProps> = {
  args: {
    src: undefined,
  },
}
