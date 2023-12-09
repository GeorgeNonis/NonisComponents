import { StoryObj, Meta } from "@storybook/react";
import { faArrowUp } from "./icon.styles";
import Icon from ".";

export default {
  component: Icon,
  args: {
    icon: faArrowUp,
  },
} as Meta<typeof Icon>;

export const Defalt: StoryObj<typeof Icon> = {};
export const Color: StoryObj<typeof Icon> = {
  args: {
    style: {
      color: "red",
    },
  },
};
