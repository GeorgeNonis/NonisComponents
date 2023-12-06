import { config, keyframes } from "../Styles/stitches.config";
import type * as Stitches from "@stitches/react";

export type CSS = Stitches.CSS<typeof config>;
export type Keyframe = ReturnType<typeof keyframes>;

export interface DataCy {
  ["data-cy"]?: string;
}

export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = DataCy & React.ComponentProps<C>;
