import { useCallback, useEffect, useState } from "react";
import type { ButtonProps } from "./button.props";
import { LdsDualRing, StyledButton } from "./button.styles";

/**
 * Button component which provides loading and throttling functionality.
 *
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {boolean} disabled - Determines if the button should start in a disabled state.
 * @param {boolean} loading - Indicates if the button should show as loading.
 * @param {Function} onClick - Callback function when the button is clicked.
 * @param {boolean} enableThrottle - If set to true, button clicks will be throttled.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref forwarded for DOM access.
 * @param {number} delayThrottle - Duration in milliseconds for which the button remains disabled after a click. Default is 1 second.
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
  spinnerBorderColor,
  round,
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

  return (
    <StyledButton
      round={round}
      disabled={isDisabled || loading}
      onClick={throttleOnClick}
      {...props}
    >
      {loading ? (
        <LdsDualRing
          css={{
            ...(spinnerBorderColor && {
              "&:after": {
                borderColor: spinnerBorderColor,
              },
            }),
          }}
        />
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;

export { StyledButton };
export type { ButtonProps };
