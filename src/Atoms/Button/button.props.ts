import { ReactNode } from "react";
import { StyledComponentProps } from "../../Types";
import { StyledButton } from "./button.styles";

export type StyledButtonProps = StyledComponentProps<typeof StyledButton>;

export interface ButtonProps extends StyledButtonProps {
  children: ReactNode;
  disabled: boolean;
  enableThrottle: boolean;
  delayThrottle: number;
  onClick: (e: React.MouseEvent) => void;
}
