import { serialize } from "next-mdx-remote/serialize";
import { Serializer } from "./types";

export type Dependencies = {
  serialize: Serializer;
};

export const di: Dependencies = {
  serialize,
};
