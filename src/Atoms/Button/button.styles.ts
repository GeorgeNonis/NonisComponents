import { keyframes, styled } from "../../Styles/stitches.config";

export const StyledButton = styled("button", {
  position: "relative",
  cursor: "pointer",
  minHeight: "fit-content",
  minWidth: "fit-content",
  "&:disabled": {
    cursor: "default",
    pointerEvents: "none",
  },

  variants: {
    round: {
      true: {
        border: "1px solid gray",
        br: "$2",
      },
    },
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
    w: "20px",
    h: "20px",
    m: "$2",
    br: "50%",
    border: "2px solid #fff",
    bc: "#fff transparent #fff transparent",
    animation: `${rotate} 1.2s linear infinite`,
  },
});
