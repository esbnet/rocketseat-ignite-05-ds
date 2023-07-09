import { Box, Text, TextArea, TextAreaProps } from "@quarkscode-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {
    placeholder: "Add your observations",
  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
};

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

