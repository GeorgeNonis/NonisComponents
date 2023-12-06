import { StoryObj, Meta } from "@storybook/react";
import Grid from ".";

export default {
  component: Grid,
} as Meta<typeof Grid>;

export const Default: StoryObj<typeof Grid> = {
  args: {
    css: {
      height: 100,
      width: 100,
      backgroundColor: "red",
    },
  },
};
export const Secondary: StoryObj<typeof Grid> = {
  args: {
    css: { width: 80, height: 80, backgroundColor: "blue" },
    round: true,
  },
};
