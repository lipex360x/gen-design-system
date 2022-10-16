import type { StoryObj, Meta } from '@storybook/react'

import { Heading } from '@gen-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md',
  },

  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Heading default: `h2`',
      },
    },
  },
}
