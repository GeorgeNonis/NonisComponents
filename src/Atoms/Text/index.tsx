import { forwardRef } from "react";
import { StyledText } from "./text.styles";
import { TextProps } from "./text.types";

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledText {...props} ref={ref}>
        {children}
      </StyledText>
    );
  }
);

Text.defaultProps = {
  size: "m",
  fontWeight: "500",
  color: "black",
};

export default Text;
