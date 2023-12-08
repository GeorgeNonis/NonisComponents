import type { GridProps } from "./grid.props";
import { forwardRef, ReactElement } from "react";
import { StyledGrid } from "./grid.styles";

/**
 * Grid component used to create a grid layout.
 *
 * @param {GridProps} props - The properties for the grid.
 * @param {React.Ref<HTMLDivElement>} ref - Ref forwarded for DOM access.
 * @param {StyledGridProps} props - Extented props of the grid element and stitches/react.
 * @example
 * <Grid autoFlow="row" gap={16}>Content</Grid>
 */
const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ round, ...props }, ref): ReactElement => (
    <StyledGrid round={round} {...props} ref={ref} />
  )
);

Grid.displayName = "Grid";

export default Grid;

export { StyledGrid, GridProps };
