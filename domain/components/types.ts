import { PropsWithChildren } from "react";
import { Dict } from "@shared/types";

export type EmptyProps = Dict<never>;
export type WithChildren<TProps = EmptyProps> = PropsWithChildren<TProps>;
