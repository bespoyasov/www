import type { PropsWithChildren } from "react";

export type AnyProps = unknown;
export type WithChildren<TProps = AnyProps> = PropsWithChildren<TProps>;
