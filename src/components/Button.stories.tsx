import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  size: 'md',
  args: {
    children: 'Create Account'
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
