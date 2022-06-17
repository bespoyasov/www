import type { ContentDirectory, QueryKind } from "@_persistence/types";
import { Dependencies } from "@_persistence/dependencies";
import { BASE_DIRECTORY } from "@_persistence/const";

type DirectoryPathBuilder = (query: QueryKind) => ContentDirectory;

export const createPathBuilder: Factory<DirectoryPathBuilder, Dependencies> =
  ({ path, locale }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
