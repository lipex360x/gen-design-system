import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@lipex360-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {},
} as Meta

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://avatars.dicebear.com/api/adventurer-neutral/%40lipex360-ui.svg',
    alt: 'Avatar Image',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  argTypes: {
    src: {
      control: 'text',
    },
  },
}
