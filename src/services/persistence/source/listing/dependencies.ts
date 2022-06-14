import system from "fs";

import type { QueryKind } from "@persistence/types";
import type { HasSpecifiedExtension, QueryDirectory } from "@persistence/utils";
import { directoryFor, hasMdx } from "@persistence/utils";

export type Dependencies = {
  system: typeof system;
  query: QueryKind;
  directoryFor: QueryDirectory;
  hasMdx: HasSpecifiedExtension;
};

export const dependencies: Omit<Dependencies, RuntimeSpecified<"query">> = {
  system,
  directoryFor,
  hasMdx,
};
