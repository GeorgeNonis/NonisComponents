import { styled, keyframes } from "@stitches/react";

export const StyledButton = styled("button", {
  position: "relative",
  cursor: "pointer",
  minHeight: 20,
  minWidth: "min-content",
  "&:disabled": {
    cursor: "default",
    pointerEvents: "none",
  },
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const LdsDualRing = styled("div", {
  display: "inline-block",

  "&:after": {
    content: '""',
    display: "block",
    width: "20px",
    height: "20px",
    margin: "8px",
    borderRadius: "50%",
    border: "2px solid #fff",
    borderColor: "#fff transparent #fff transparent",
    animation: `${rotate} 1.2s linear infinite`,
  },
});
