import { StoryObj, Meta } from "@storybook/react";
import Button from ".";

export default {
  component: Button,
  args: {
    children: "Button",
    disabled: false,
    loading: false,
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Default",
    disabled: false,
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
export const Reset: StoryObj<typeof Button> = {
  args: {
    children: "reset",
    variant: "reset",
    round: true,
  },
};
export const SmallSize: StoryObj<typeof Button> = {
  args: {
    children: "SmallSize",
    variant: "reset",
    size: "small",
    round: true,
  },
};
