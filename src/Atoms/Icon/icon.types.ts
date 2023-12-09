import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type IconProps = {
  height?: number;
  width?: number;
  color?: string;
  rounded?: boolean;
  bgc?: string;
} & FontAwesomeIconProps;
