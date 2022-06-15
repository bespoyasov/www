import fs from "fs";
import type { PlatformPath } from "path";
import type { QueryKind } from "./types";

type System = typeof fs;
type PathResolver = PlatformPath;

export type Dependencies = {
  system: System;
  path: PathResolver;
  query: QueryKind;
};

export type Predefined = Configurable<Dependencies, "query">;
