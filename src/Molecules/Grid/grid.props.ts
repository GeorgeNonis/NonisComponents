import { StyledGrid } from ".";
import { StyledComponentProps } from "../../Types";

export type StyledGridProps = StyledComponentProps<typeof StyledGrid>;

export type GridProps = {
  round?: boolean;
} & StyledGridProps;
