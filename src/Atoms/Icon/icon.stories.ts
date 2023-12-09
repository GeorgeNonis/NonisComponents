import { StoryObj, Meta } from "@storybook/react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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

export const onClick: StoryObj<typeof Icon> = {
  args: {
    onClick: () => alert("clicked"),
    color: "blue",
    rounded: true,
    bgc: "black",
  },
};
