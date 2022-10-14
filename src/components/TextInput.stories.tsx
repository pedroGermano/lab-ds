import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Component/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your e-mail address'
  },
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
