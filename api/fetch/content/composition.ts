import parser from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Serializer, Parser } from "../types";

export type Dependencies = {
  serialize: Serializer;
  parser: Parser;
};

export const di: Dependencies = {
  serialize,
  parser,
};
