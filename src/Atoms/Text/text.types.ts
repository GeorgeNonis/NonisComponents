import { ReactNode } from "react";
import { StyledComponentProps } from "../../Types";
import { StyledText } from "./text.styles";

export type StyledTextProps = StyledComponentProps<typeof StyledText>;

export interface TextProps extends StyledTextProps {
  children: ReactNode;
}
