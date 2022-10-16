import type { StoryObj, Meta } from '@storybook/react'
import { Container, ContainerProps } from '@gen-ui/react'

export default {
  title: 'Surfaces/Container',
  component: Container,

  args: {
    children: (
      <>
        <span>Hello Box</span>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<ContainerProps> = {}
