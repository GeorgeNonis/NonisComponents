import { keyframes, styled } from "../../Styles/stitches.config";

export const StyledButton = styled("button", {
  position: "relative",
  cursor: "pointer",
  paddingInline: "$4",
  minW: "fit-content",
  marginBlock: "0.7rem",
  marginInline: "auto",
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
        bc: "#f26716",
        bgc: "#f26716",
        color: "white",

        "@canHover": {
          "&:hover": {
            bc: "rgb(249 148 86)",
            bgc: "rgb(249 148 86)",
          },
        },

        "&:disabled": {
          bc: "rgb(255 201 172)",
          bgc: "rgb(255 201 172)",
        },
      },
      error: {
        bc: "#ff7272",
        bgc: "#ff7272",
        color: "white",
        "@canHover": {
          "&:hover": {
            bc: "#f8a3a3",
            bgc: "#f8a3a3",
          },
        },

        "&:disabled": {
          bc: "#ffcdcd",
          bgc: "#ffcdcd",
        },
      },
      reset: {},
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

export const StyledLoadingSpinner = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "grid",
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
