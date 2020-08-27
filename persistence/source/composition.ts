import fs from "fs";

export type Dependencies = {
  system?: SystemType;
};

export const di: Dependencies = { system: fs };
