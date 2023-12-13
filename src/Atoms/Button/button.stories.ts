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
    size: "s",
    round: true,
  },
};
export const MediumSize: StoryObj<typeof Button> = {
  args: {
    children: "MediumSize",
    variant: "reset",
    size: "m",
    round: true,
  },
};
export const LargeSize: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    variant: "reset",
    size: "l",
    round: true,
  },
};
export const Theme: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    variant: "reset",
    size: "l",
    round: true,
    theme: "purple",
  },
};
export const NoteManagerTheme: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    variant: "reset",
    size: "l",
    theme: "#f26716",
  },
};
