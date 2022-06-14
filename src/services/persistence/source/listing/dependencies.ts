import system from "fs";
import type { QueryKind } from "@persistence/types";

export type Dependencies = {
  system: typeof system;
  query: QueryKind;
};

export const dependencies: Configurable<Dependencies, "query"> = {
  system,
};
