import type { PathResolver, System } from "./adapters";

export type Dependencies = {
  path: PathResolver;
  system: System;
  locale: Locale;
};
