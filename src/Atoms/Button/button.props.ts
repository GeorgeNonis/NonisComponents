import { ReactNode } from "react";
import { StyledComponentProps } from "../../Types";
import { StyledButton, StyledLoadingSpinner } from "./button.styles";

export type StyledButtonProps = StyledComponentProps<typeof StyledButton>;
export type StyledLoadingSpinnerProps = StyledComponentProps<
  typeof StyledLoadingSpinner
>;

/**
 * `Button` component properties.
 *
 * @extends StyledButtonProps Inherits additional properties from `StyledButtonProps`.
 * @param children React elements to display inside the button.
 * @param disabled Determines whether the button is disabled.
 * @param enableThrottle Optional. If true, enables throttle behavior on click.
 * @param delayThrottle Optional. Time in milliseconds to disable the button after a click, applicable if `enableThrottle` is true.
 * @param loading Optional. If true, shows a loading spinner inside the button.
 * @param round Optional. If true, applies a rounded style to the button.
 * @param loadingSpinnerProps Optional. Extended properties for `StyledLoadingSpinner`. For example, to change the color of the spinner:
 *    ` loadingSpinnerProps: {
 *    css: {
 *      "&:after": {
 *         bc: "red transparent red transparent",
 *       },
 *    },
 * },`
 * @param theme Optional. Specifies the base color for generating button variants. Should be a valid CSS color.
 * @param loadingSpinner Optional. Provide your own loading component.
 */
export interface ButtonProps extends StyledButtonProps {
  children: ReactNode;
  enableThrottle?: boolean;
  delayThrottle?: number;
  loading?: boolean;
  round?: boolean;
  loadingSpinnerProps?: StyledLoadingSpinnerProps;
  theme?: string;
  loadingSpinner?: JSX.Element;
}
