import { StoryObj, Meta } from "@storybook/react";
import Input from ".";

export default {
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Default",
  },
};
