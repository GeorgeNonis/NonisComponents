import { styled } from "../../Styles/stitches.config";

export const commonVariants = {
  fontWeight: {
    100: {
      fontWeight: 100,
    },
    200: {
      fontWeight: 200,
    },
    300: {
      fontWeight: 300,
    },
    400: {
      fontWeight: 400,
    },
    500: {
      fontWeight: 500,
    },
    600: {
      fontWeight: 600,
    },
    700: {
      fontWeight: 700,
    },
    800: {
      fontWeight: 800,
    },
    900: {
      fontWeight: 900,
    },
    bold: {
      fontWeight: "bold",
    },
    bolder: {
      fontWeight: "bolder",
    },
    lighter: {
      fontWeight: "lighter",
    },
    normal: {
      fontWeight: "normal",
    },
  },
  fontStyle: {
    italic: {
      fontStyle: "italic",
    },
  },
  fontFamily: {
    math: {
      fontFamily: "math",
    },
    "Roboto Mono": {
      fontFamily: "Roboto Mono",
    },
  },
  textDecoration: {
    none: { textDecoration: "none" },
    underline: { textDecoration: "underline" },
    lineThrough: { textDecoration: "line-through" },
  },
  textAlign: {
    left: { textAlign: "left" },
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    justify: { textAlign: "justify" },
  },
  textTransform: {
    uppercase: { textTransform: "uppercase" },
    lowercase: { textTransform: "lowercase" },
    capitalize: { textTransform: "capitalize" },
  },
  overflow: {
    ellipsis: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
};

export const StyledText = styled("span", {
  variants: {
    size: {
      xs: {
        fontSize: "0.75rem",
      },
      s: {
        fontSize: "0.875rem",
      },
      m: {
        fontSize: "1rem",
      },
      l: {
        fontSize: "1.125rem",
      },
      xl: {
        fontSize: "1.2rem",
      },
    },
    ...commonVariants,
  },
});
