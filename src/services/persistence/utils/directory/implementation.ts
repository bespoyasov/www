import { BASE_DIRECTORY } from "@persistence/const";
import type { Dependencies } from "./dependencies";
import type { DirectoryQuery } from "./types";

export const createQueryDirectory: Factory<DirectoryQuery, Dependencies> =
  ({ locale, path }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
