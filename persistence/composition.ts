import fs from "fs";
import { SystemType } from "@persistence/types";
import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@persistence/const";

export type QueryKind = typeof PROJECTS_DIRECTORY | typeof BLOG_DIRECTORY;

export type Dependencies = {
  system?: SystemType;
};

export const di: Dependencies = { system: fs };
