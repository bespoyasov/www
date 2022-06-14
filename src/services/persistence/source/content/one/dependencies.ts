import system from "fs";
import path from "path";

import type { PlatformPath } from "path";
import type { QueryKind } from "@persistence/types";
import type { AddExtension, QueryDirectory } from "@persistence/utils";
import { directoryFor, withMdx } from "@persistence/utils";

export type Dependencies = {
  path: PlatformPath;
  system: typeof system;

  query: QueryKind;
  directoryFor: QueryDirectory;
  withMdx: AddExtension;
};

export const dependencies: Omit<Dependencies, RuntimeSpecified<"query">> = {
  system,
  path,

  directoryFor,
  withMdx,
};
