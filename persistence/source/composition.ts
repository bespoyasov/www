import fs from "fs";

export type Dependencies = {
  system?: typeof fs;
};

export const di: Dependencies = { system: fs };
