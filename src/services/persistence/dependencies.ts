import type { PathResolver, System } from "@persistence/adapters";

export type Dependencies = {
  path: PathResolver;
  system: System;
  locale: Locale;
};
