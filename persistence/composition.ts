import fs from "fs";
import { SystemType } from "@persistence/types";

export type Dependencies = {
  system?: SystemType;
};

export const di: Dependencies = { system: fs };
