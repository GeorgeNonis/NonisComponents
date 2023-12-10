import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { DataCy } from "../../Types";

export type IconProps = {
  height?: number;
  width?: number;
  color?: string;
  rounded?: boolean;
  bgc?: string;
} & FontAwesomeIconProps &
  DataCy;
