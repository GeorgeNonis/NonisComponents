import { keyframes, styled } from "../../Styles/stitches.config";
import { lighten, tint } from "polished";

export const createColorVariants = (baseColor: string) => {
  const hoverColor = lighten(0.1, baseColor); // 10% lighter for hover
  const disabledColor = tint(0.3, baseColor); // 30% lighter for disabled

  return {
    "@canHover": {
      "&:hover": {
        bc: hoverColor,
        bgc: hoverColor,
      },
    },

    "&:disabled": {
      bc: disabledColor,
      bgc: disabledColor,
    },
  };
};

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
        br: "$2",
      },
    },
    size: {
      s: {
        fontSize: "0.875rem",
        height: 24,
      },
      m: {
        fontSize: "1rem",
        h: 32,
      },
      l: {
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
      reset: {
        bc: "black",
        bgc: "black",
        color: "white",
        "@canHover": {
          "&:hover": {
            bc: "#494949",
            bgc: "#494949",
          },
        },

        "&:disabled": {
          bc: "rgb(121 121 121)",
          bgc: "rgb(121 121 121)",
        },
      },
    },
  },

  defaultVariants: {
    size: "m",
    variant: "default",
    round: true,
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
    w: 20,
    h: 20,
    margin: "8px",
    borderRadius: "50%",
    border: "2px solid #fff",
    borderColor: "#fff transparent #fff transparent",
    animation: `${rotate} 1.2s linear infinite`,
  },
  variants: {
    size: {
      s: {
        "&:after": {
          w: 15,
          h: 15,
        },
      },
      m: {
        w: 20,
        h: 20,
      },
      l: { w: 26, h: 246 },
    },
  },
});
