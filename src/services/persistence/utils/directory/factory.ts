import { BASE_DIRECTORY } from "@persistence/const";
import type { Dependencies } from "./dependencies";
import type { QueryDirectory } from "./types";

export const createQueryDirectory: Factory<QueryDirectory, Dependencies> =
  ({ locale, path }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
