import { forwardRef, ReactElement } from "react";
import { GridProps } from "./grid.props";
import { StyledGrid } from "./grid.styles";

/**
 * Grid component used to create a grid layout.
 *
 * @param {GridProps} props - The properties for the grid.
 * @param {React.Ref<HTMLDivElement>} ref - Ref forwarded for DOM access.
 *
 * @example
 * <Grid autoFlow="row" gap={16}>Content</Grid>
 */
const Grid = forwardRef<HTMLDivElement, GridProps>(
  (props, ref): ReactElement => <StyledGrid {...props} ref={ref} />
);

Grid.displayName = "Grid";

export default Grid;

export { StyledGrid };
