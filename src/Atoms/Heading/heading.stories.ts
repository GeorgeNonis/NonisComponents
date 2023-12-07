import { StoryObj, Meta } from "@storybook/react";
import Heading from ".";

export default {
  component: Heading,
  args: {
    as: "h1",
  },
} as Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: "Default",
    as: "h1",
  },
};
export const Heading2: StoryObj<typeof Heading> = {
  args: {
    children: "Im a Heading - 2",
    as: "h2",
  },
};
export const Heading6: StoryObj<typeof Heading> = {
  args: {
    children: "Im a Heading - 2",
    as: "h6",
    fontWeight: 800,
    fontStyle: "italic",
  },
};
