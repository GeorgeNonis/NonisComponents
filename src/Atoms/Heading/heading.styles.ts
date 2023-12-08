import { styled } from "../../Styles/stitches.config";
import { commonVariants } from "../Text/text.styles";

export const StyledHeading = styled("h1", {
  variants: {
    size: {
      1: {
        fontSize: "2.986rem",
      },
      2: {
        fontSize: "2.488rem",
      },
      3: {
        fontSize: "2.074rem",
      },
      4: {
        fontSize: "1.728rem",
      },
      5: {
        fontSize: "1.44rem",
      },
      6: {
        fontSize: "1.2rem",
      },
    },
    ...commonVariants,
  },
});
