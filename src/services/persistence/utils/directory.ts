import type { ContentDirectory, QueryKind } from "@persistence/types";
import { Dependencies } from "@persistence/dependencies";
import { BASE_DIRECTORY } from "@persistence/const";

type DirectoryPathBuilder = (query: QueryKind) => ContentDirectory;

export const createPathBuilder: Factory<DirectoryPathBuilder, Dependencies> =
  ({ path, locale }) =>
  (query) =>
    path.join(BASE_DIRECTORY, locale, query);
