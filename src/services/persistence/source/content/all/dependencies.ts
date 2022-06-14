import system from "fs";

export type Dependencies = {
  system: typeof system;
};

export const dependencies: Dependencies = {
  system,
};
