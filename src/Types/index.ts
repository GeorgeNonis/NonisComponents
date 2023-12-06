export interface DataCy {
  ["data-cy"]?: string;
}

export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = DataCy & React.ComponentProps<C>;
