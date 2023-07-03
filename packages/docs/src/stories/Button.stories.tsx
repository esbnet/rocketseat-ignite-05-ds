import { Button, ButtonProps } from "@qc-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: 'Enviar'
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size:'big'
  }
  
}