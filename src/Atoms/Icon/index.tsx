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

const Icon = ({ style, width = 30, height = 30, ...props }: IconProps) => {
  return <FontAwesomeIcon {...props} style={{ height, width, ...style }} />;
};
export default Icon;
