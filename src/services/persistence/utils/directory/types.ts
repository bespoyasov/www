import type { ContentDirectory, QueryKind } from "@persistence/types";

export type QueryDirectory = (query: QueryKind) => ContentDirectory;
