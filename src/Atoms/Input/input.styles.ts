import { styled } from "../../Styles/stitches.config";

export const StyledInput = styled("input", {
  outline: "none",
  variants: {
    round: {
      true: {
        br: "$2",
        border: "1px solid",
      },
    },
  },
});
