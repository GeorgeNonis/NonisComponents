import { StoryObj, Meta } from "@storybook/react";
import Button from ".";

export default {
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Default",
  },
};
export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: "Secondary",
  },
};
export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: "Secondary",
    disabled: true,
  },
};
export const Loading: StoryObj<typeof Button> = {
  args: {
    children: "Loading",
    disabled: true,
    loading: true,
    spinnerBorderColor: "red transparent red transparent",
  },
};
