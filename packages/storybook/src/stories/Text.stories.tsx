import type { StoryObj, Meta } from '@storybook/react'

import { Text } from '@gen-ui/react'
import { fontSizes } from '@gen-ui/tokens'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem, ipsum dolor.',
    size: 'md',
  },

  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: Object.entries(fontSizes).map(([key]) => key),
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
