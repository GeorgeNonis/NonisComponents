import { styled } from "@stitches/react";

export const StyledInput = styled("input", {
  outline: "none",
  variants: {
    round: {
      true: {
        borderRadius: 8,
        border: "1px solid",
      },
    },
  },
});
