import type { ContentDirectory, QueryKind } from "../types";
import { Dependencies } from "../dependencies";
import { BASE_DIRECTORY } from "../const";

type DirectoryPathBuilder = (query: QueryKind) => ContentDirectory;

export const createPathBuilder: Factory<DirectoryPathBuilder, Dependencies> =
  ({ path, locale }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
