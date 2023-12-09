import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./icon.types";

const Icon = ({ style, width = 30, height = 30, ...props }: IconProps) => {
  return <FontAwesomeIcon {...props} style={{ height, width, ...style }} />;
};
export default Icon;
