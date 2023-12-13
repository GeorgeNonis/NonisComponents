import { ReactNode } from "react";
import { StyledComponentProps } from "../../Types";
import { StyledButton, StyledLoadingSpinner } from "./button.styles";

export type StyledButtonProps = StyledComponentProps<typeof StyledButton>;
export type StyledLoadingSpinnerProps = StyledComponentProps<
  typeof StyledLoadingSpinner
>;

/**
 * `Button` simple Button component that has internal state and throttleBehavior
 *
 * @extends StyledButtonProps (Inherits additional properties from `StyledButtonProps`)
 * @children - React elements that will be displayed inside the button.
 * @disabled - Determines whether the button is disabled or not.
 * @boolean - Optional. Determines if the button should have a throttle behavior.
 * @number - Optional. Time in milliseconds for which the button is disabled after a click, if `enableThrottle` is true.
 * @loading - Optional. Loading state for loading spinner
 * @spinnerBorderColor - Optional. Color of the spinner
 * @onClick - Event handler called when the button is clicked.
 */
export interface ButtonProps extends StyledButtonProps {
  children: ReactNode;
  enableThrottle?: boolean;
  delayThrottle?: number;
  loading?: boolean;
  spinnerBorderColor?: string;
  round?: boolean;
  loadingSpinnerProps?: StyledLoadingSpinnerProps;
}
