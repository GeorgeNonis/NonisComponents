import { StyledComponentProps } from "../../Types";
import { StyledHeading } from "./heading.styles";

export type StyledHeadingProps = StyledComponentProps<typeof StyledHeading>;

export type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & StyledHeadingProps;
