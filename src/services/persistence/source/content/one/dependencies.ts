import system from "fs";
import path from "path";

import type { PlatformPath } from "path";
import type { QueryKind } from "@persistence/types";
import type { AddExtension, QueryDirectory } from "@persistence/utils";
import { directoryFor, withMdx } from "@persistence/utils";

export type Dependencies = {
  path: PlatformPath;
  system: typeof system;

  queryKind: QueryKind;
  directoryFor: QueryDirectory;
  withMdx: AddExtension;
};

export const defaultDependencies: Partial<Dependencies> = {
  system,
  path,

  directoryFor,
  withMdx,
};
