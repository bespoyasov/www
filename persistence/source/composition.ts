import fs from "fs";

export type SystemType = typeof fs;
export type Dependencies = {
  system?: SystemType;
};

export const di: Dependencies = { system: fs };
