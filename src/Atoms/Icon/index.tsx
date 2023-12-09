import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./icon.types";

/**
 *
 * @note By default, designed to work with icons from `@fortawesome` either `free`, `solid`, `regular`, `brands`, or `pro`.
 * @param {IconProp} icon - Svg-Icon to render out
 * @param {number} height - Optional - sets the height of the Icon default value is 30px
 * @param {number} width - Optional - sets the width of the Icon default value is 30px
 * @param {string} color - Optional - sets the color of the Icon
 * @param {string} bgc - Optional - sets the background color of the Icon
 * @param {boolean} rounded - Optional - if set to true sets the border-radius on the Icon 50%
 * @param {FontAwesomeIconProps} props - Extented props of the FontAwesomeIconProps.
 *
 * @example
 * <Icon icon={faArrowDown} rounded={true} color={'white'} bgc={'black'}/>
 */

const Icon = ({
  style,
  width = 30,
  height = 30,
  onClick,
  color = "black",
  bgc = "unset",
  rounded,
  ...props
}: IconProps) => {
  const defaultStyle = {
    cursor: onClick ? "pointer" : "default",
    color: color,
    backgroundColor: bgc,
    borderRadius: rounded ? "50%" : "unset",
    width,
    height,
  };

  return (
    <FontAwesomeIcon
      {...props}
      aria-hidden={!Boolean(onClick)}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      style={{ ...defaultStyle, padding: 4, ...style }}
      onClick={onClick}
    />
  );
};
export default Icon;
