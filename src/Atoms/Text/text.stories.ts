import { StoryObj, Meta } from "@storybook/react";
import Text from ".";

export default {
  component: Text,
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: "Default",
  },
};
export const Secondary: StoryObj<typeof Text> = {
  args: {
    children: "Secondary",
    fontFamily: "math",
    fontWeight: "bold",
  },
};
export const Size: StoryObj<typeof Text> = {
  args: {
    children: "XL",
    fontFamily: "math",
    fontWeight: "100",
    size: "xl",
  },
};
export const RedColor: StoryObj<typeof Text> = {
  args: {
    children: "Im a red text",
    fontFamily: "Roboto Mono",
    fontWeight: "100",
    size: "xl",
    css: { color: "red" },
  },
};
