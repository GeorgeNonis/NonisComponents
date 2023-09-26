import { useCallback, useEffect, useState } from "react";
import { ButtonProps } from "./button.props";
import { StyledButton } from "./button.styles";

const Button = ({
  children,
  disabled,
  enableThrottle,
  delayThrottle,
  onClick,
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
    <StyledButton disabled={isDisabled} onClick={throttleOnClick} {...props}>
      {children}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;

export { StyledButton };
