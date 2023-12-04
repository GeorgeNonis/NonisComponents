import type { InputProps } from "./input.types";
import { forwardRef } from "react";
import { StyledInput } from "./input.styles";

/**
 * Input build on StyledInput used primarily for the forms across app
 * @param {React.Ref<HTMLInputElement>} ref - Ref forwarded for DOM access.
 * @param {...any} props - Spread the rest of the properties to the underlying input.
 *
 * @example
 * <Input type="text" placeholder="Enter text"/>
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} required ref={ref} />;
});

Input.displayName = "Input";
export default Input;
