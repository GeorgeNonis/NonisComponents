import { forwardRef } from "react";
import { StyledText } from "../Text/text.styles";
import { HeadingProps } from "./heading.types";

/**
 * Creates a Heading component that can dynamically render different HTML heading elements (h1, h2, etc.).
 * @param {string} as - The heading element type - 'h1' |  'h2' |  'h3' |  'h4' |  'h5' |  'h6'.
 * @param {TextProps} props - Extented props of the element(<span/>) and stitches/react.
 * @example
 * <Heading as='h1' fontWeight='300'>This is a heading</Heading>
 */

const Heading = forwardRef<HTMLHeadElement, HeadingProps>(
  ({ as, children, ...props }, ref) => {
    return (
      <StyledText ref={ref} {...props} as={as}>
        {children}
      </StyledText>
    );
  }
);
export default Heading;
