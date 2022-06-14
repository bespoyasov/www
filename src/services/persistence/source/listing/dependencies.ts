import system from "fs";

import type { HasSpecifiedExtension, QueryDirectory } from "@persistence/utils";
import { directoryFor, hasMdx } from "@persistence/utils";

export type Dependencies = {
  system?: typeof system;
  directoryFor: QueryDirectory;
  hasMdx: HasSpecifiedExtension;
};

export const defaultDependencies: Dependencies = {
  system,
  directoryFor,
  hasMdx,
};
