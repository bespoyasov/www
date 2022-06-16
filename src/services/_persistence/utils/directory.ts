import type { ContentDirectory, QueryKind } from "../types";
import { BASE_DIRECTORY } from "../const";
import { Dependencies } from "../dependencies";

type DirectoryPathBuilder = (query: QueryKind) => ContentDirectory;

export const createPathBuilder: Factory<DirectoryPathBuilder, Dependencies> =
  ({ path, locale }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
