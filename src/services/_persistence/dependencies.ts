import fs from "fs";
import type { PlatformPath } from "path";

type System = typeof fs;
type PathResolver = PlatformPath;

export type Dependencies = {
  path: PathResolver;
  system: System;
  locale: Locale;
};
