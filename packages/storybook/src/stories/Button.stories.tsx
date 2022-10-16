import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@gen-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },

    disabled: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
}

export const Variants: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
}

export const Sizes: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <span>Next Step</span> <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const AsLink: StoryObj<ButtonProps> = {
  args: {
    as: 'a',
    href: '/link',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    disabled: true,
  },

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
}
