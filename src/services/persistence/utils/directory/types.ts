import type { ContentDirectory, QueryKind } from "@persistence/types";

export type DirectoryQuery = (query: QueryKind) => ContentDirectory;
