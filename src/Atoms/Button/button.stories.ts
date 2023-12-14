import { StoryObj, Meta } from "@storybook/react";
import { CircleLoader } from "react-spinners";
import Button from ".";
import React from "react";

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
    children: "Error",
    disabled: true,
    theme: "#ff7272",
  },
};
export const Loading: StoryObj<typeof Button> = {
  args: {
    children: "Loading",
    loading: true,
  },
};
export const BlackTheme: StoryObj<typeof Button> = {
  args: {
    children: "BlackTheme",
  },
};
export const SmallSize: StoryObj<typeof Button> = {
  args: {
    children: "SmallSize",
    size: "s",
  },
};
export const MediumSize: StoryObj<typeof Button> = {
  args: {
    children: "MediumSize",
    size: "m",
  },
};
export const LargeSize: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    size: "l",
  },
};
export const Theme: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    size: "l",
    theme: "purple",
  },
};
export const NoteManagerTheme: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    size: "l",
    theme: "#f26716",
  },
};
export const LoadingSpinnerBorderColor: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    size: "l",
    theme: "#f26716",
    loadingSpinnerProps: {
      css: {
        "&:after": {
          bc: "red transparent red transparent",
        },
      },
    },
  },
};
export const DifferentLoadingSpinner: StoryObj<typeof Button> = {
  args: {
    children: "LargeSize",
    size: "l",
    theme: "#f26716",
    loadingSpinner: React.createElement(CircleLoader),
    onClick: () => alert("clicked"),
  },
};
export const Reset: StoryObj<typeof Button> = {
  args: {
    children: "Reset",
    size: "l",
    variant: "reset",
    onClick: () => alert("clicked"),
  },
};
