import { forwardRef } from "react";
import { StyledText } from "./text.styles";
import { TextProps } from "./text.types";

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, size = "m", ...props }, ref) => {
    return (
      <StyledText size={size} {...props} ref={ref}>
        {children}
      </StyledText>
    );
  }
);

export default Text;
