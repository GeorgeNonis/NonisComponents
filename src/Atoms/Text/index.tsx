import { forwardRef } from "react";
import { StyledText } from "./text.styles";
import { TextProps } from "./text.types";

/**
 * Text component for rendering text with customizable styles and size.
 * @param {ReactNode} children - The content of the text component.
 * @param {string} size - Variant - sets the font-size of the text - default 'm' - 'xs' | 's' | 'm' | 'l' 'xl' .
 * @param {string} fontWeight - Variant - sets the font-weight.
 * @param {string} textDecoration - Variant - sets the text-decoration - 'none' | 'underline' | 'line-through'  .
 * @param {StyledTextProps} props - extented props of the element(<span/>) and stitches/react.
 */
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
