import { forwardRef } from "react";
import { StyledText } from "../Text/text.styles";
import { HeadingProps } from "./heading.types";

const Heading = forwardRef<HTMLHeadElement, HeadingProps>(
  ({ as, ...props }, ref) => {
    return <StyledText ref={ref} {...props} as={as} />;
  }
);
export default Heading;
