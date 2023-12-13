import { keyframes, styled } from "../../Styles/stitches.config";

export const StyledButton = styled("button", {
  position: "relative",
  cursor: "pointer",
  paddingInline: "$4",
  minW: "fit-content",
  marginBlock: "0.7rem",
  marginInline: "auto",
  borderRadius: "8px",
  border: "none",
  "&:disabled": {
    cursor: "default",
    pointerEvents: "none",
  },

  variants: {
    round: {
      true: {
        border: "1px solid",
        br: "$2",
      },
    },
    size: {
      small: {
        fontSize: "0.875rem",
        h: 24,
      },
      medium: {
        fontSize: "1rem",
        h: 32,
      },
      large: {
        fontSize: "1.125rem",
        h: 48,
      },
    },

    variant: {
      default: {
        backgroundColor: "#f26716",
      },
      danger: {
        backgroundColor: "#ff7272",
      },
      reset: {
        bgc: "unset",
        border: "unset",
        br: "unset",
        p: "unset",
        "&:hover": {
          bgc: "#28292c",
        },
      },
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "default",
  },
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const LdsDualRing = styled("div", {
  display: "grid",
  width: "100%",
  height: "100%",
  placeContent: "center",

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
