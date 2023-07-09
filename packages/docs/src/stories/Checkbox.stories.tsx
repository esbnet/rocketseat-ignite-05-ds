import { Box, Checkbox, CheckboxProps, Text } from "@quarkscode-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    placeholder: "Type your name",
  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size={"sm"}>Accept term of use.</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const Disable: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
};
