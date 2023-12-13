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
    disabled: false,
  },
};
export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: "Alert",
    onClick: () => alert("Alert"),
    loading: true,
  },
};
export const Error: StoryObj<typeof Button> = {
  args: {
    round: true,
    children: "Error",
    disabled: true,
    variant: "error",
  },
};
export const Loading: StoryObj<typeof Button> = {
  args: {
    children: "Loading",
    loading: true,
  },
};
