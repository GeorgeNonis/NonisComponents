import { forwardRef } from "react";
import { StyledText } from "./text.styles";
import type { TextProps } from "./text.types";

/**
 * Text component for rendering text with customizable styles and size.
 * @param {ReactNode} children - The content of the text component.
 * @param {string} size - Variant - sets the font-size of the text - default 'm' - 'xs' | 's' | 'm' | 'l' 'xl' .
 * @param {string} fontWeight - Variant - sets the font-weight.
 * @param {string} textDecoration - Variant - sets the text-decoration - 'none' | 'underline' | 'line-through'  .
 * @param {StyledTextProps} props - Extented props of the span element and stitches/react.
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

Text.displayName = "Text";
export default Text;

export { StyledText };
export type { TextProps };
