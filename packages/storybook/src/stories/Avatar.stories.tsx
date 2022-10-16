import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gen-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.dicebear.com/api/adventurer-neutral/%40gen-ui.svg',
    alt: 'Avatar Image',
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
