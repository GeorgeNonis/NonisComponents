import { StyledGrid } from ".";
import type { StyledComponentProps } from "../../Types";

export type StyledGridProps = StyledComponentProps<typeof StyledGrid>;

export type GridProps = {
  round?: boolean;
} & StyledGridProps;
