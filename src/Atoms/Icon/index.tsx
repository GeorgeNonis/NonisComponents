import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./icon.types";

/**
 *
 * @note By default, designed to work with icons from `@fortawesome` either `free`, `solid`, `regular`, `brands`, or `pro`.
 * @param {IconProp} icon - Svg-Icon to render out
 * @param {number} height - Optional - sets the height of the Icon default value is 30px
 * @param {number} width - Optional - sets the width of the Icon default value is 30px
 * @param {FontAwesomeIconProps} props - Extented props of the FontAwesomeIconProps.
 *
 * @example
 * <Icon icon={faArrowDown} />
 */

const Icon = ({
  style,
  width = 30,
  height = 30,
  onClick,
  color,
  rounded,
  bgc,
  ...props
}: IconProps) => {
  const defaultStyle = {
    cursor: onClick ? "pointer" : "default",
    color: color ? color : "black",
    borderRadius: rounded ? "50%" : "unset",
    backgroundColor: bgc ? bgc : "unset",
    width,
    height,
  };

  return (
    <FontAwesomeIcon
      {...props}
      style={{ ...defaultStyle, padding: 4, ...style }}
      onClick={onClick}
    />
  );
};
export default Icon;
