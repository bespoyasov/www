import system from "fs";

export type Dependencies = {
  system?: typeof system;
};

export const defaultDependencies: Dependencies = {
  system,
};
