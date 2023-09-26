import { styled } from "@stitches/react";

export const StyledButton = styled("button", {
  "&:disabled": {
    cursor: "default",
    pointerEvents: "none",
  },
});
