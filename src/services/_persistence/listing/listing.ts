import type { QueryKind } from "@persistence/types";
import type { Dependencies } from "@persistence/dependencies";
import type { QueryListing } from "@persistence/ports";

import { directoryFor, isMdx } from "@persistence/utils";

type QueryCreator = (query: QueryKind) => QueryListing;

export const createListingQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system }) =>
  (query) =>
  () =>
    system
      .readdirSync(directoryFor(query))
      .filter(isMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
