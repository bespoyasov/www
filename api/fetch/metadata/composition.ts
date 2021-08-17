import parser from "gray-matter";
import { Parser } from "../types";

export type Dependencies = {
  parser: Parser;
};

export const di: Dependencies = {
  parser,
};
