import { Box, Text, TextInput, TextInputProps } from "@qc-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {
    placeholder: "Type your name",

  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Email adress</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
};

export const Disable: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "dev.com/",
  },
};
