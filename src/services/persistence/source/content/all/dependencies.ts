import system from "fs";
import path from "path";

import type { PlatformPath } from "path";
import type { QueryKind } from "@persistence/types";

export type Dependencies = {
  system: typeof system;
  path: PlatformPath;
  query: QueryKind;
};

export const dependencies: Configurable<Dependencies, "query"> = {
  system,
  path,
};
