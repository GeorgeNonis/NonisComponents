import { styled } from "../../../../globalStyles";

export const StyledGrid = styled("div", {
  display: "grid",

  variants: {
    autoFlow: {
      column: {
        gridAutoFlow: "column",
      },
      dense: {
        gridAutoFlow: "dense",
      },
      row: {
        gridAutoFlow: "row",
      },
    },
    gap: {
      4: {
        gap: "$1",
      },
      8: {
        gap: "$2",
      },
      16: {
        gap: "$3",
      },
      32: {
        gap: 32,
      },
    },
    centerItems: {
      true: {
        placeItems: "center",
      },
    },
  },
});
