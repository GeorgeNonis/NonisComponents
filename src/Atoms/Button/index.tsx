import { useCallback, useEffect, useState } from "react";
import type { ButtonProps } from "./button.props";
import {
  StyledLoadingSpinner,
  StyledButton,
  createColorVariants,
} from "./button.styles";
import { Grid } from "../../Molecules";

/**
 * Button component which provides loading and throttling functionality.
 *
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {boolean} disabled - Determines if the button should start in a disabled state.
 * @param {boolean} enableThrottle - If set to true, button clicks will be throttled.
 * @param {number} delayThrottle - Duration in milliseconds for which the button remains disabled after a click. Default is 1 second.
 * @param {Function} onClick - Callback function when the button is clicked.
 * @param {boolean} loading - Indicates if the button should show as loading.
 * @param {StyledLoadingSpinnerProps} loadingSpinner - Extented props of the Loading Spinner element and stitches/react.
 * @param {boolean} loadingSpinner - Optional - If true border-radius: 16px.
 * @param {Stitches.CSS} css - Stitches CSS.
 * @param {string} theme - Optional - If set then it generates a palette for the button - background-color & hover & disable colors.
 * @param {string} size - Optional - Variant for sizes of the button.
 * @param {JSX.Element} LoadingSpinner - Optional - Can use your own loading spinner component.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref forwarded for DOM access.
 * @param {StyledButtonProps} props - Extented props of the button element and stitches/react.
 *
 * @example
 * <Button onClick={handleClick} enableThrottle>
 *   Click Me
 * </Button>
 */
const Button = ({
  children,
  disabled,
  enableThrottle,
  delayThrottle = 1000,
  onClick,
  loading,
  loadingSpinnerProps,
  round,
  css,
  theme,
  size,
  loadingSpinner,
  variant,
  ...props
}: ButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  const throttleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (enableThrottle) {
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), delayThrottle);
      }
    },
    [delayThrottle, enableThrottle, onClick]
  );

  useEffect(() => setIsDisabled(disabled), [disabled]);

  const spinner = loadingSpinner ? (
    <Grid
      css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      {loadingSpinner}
    </Grid>
  ) : (
    <StyledLoadingSpinner
      size={size}
      variant={variant === "plain" ? "plain" : undefined}
      {...(loadingSpinnerProps && { ...loadingSpinnerProps })}
    />
  );

  return (
    <StyledButton
      round={round}
      disabled={isDisabled || loading}
      onClick={throttleOnClick}
      variant={variant}
      css={{
        ...css,
        ...(theme && { ...createColorVariants(theme) }),
      }}
      size={size}
      {...props}
    >
      <div style={{ ...(loading && { visibility: "hidden", opacity: 0 }) }}>
        {children}
      </div>
      {loading && spinner}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;

export { StyledLoadingSpinner };
export { StyledButton };
export type { ButtonProps };
