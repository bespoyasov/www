import type { QueryKind } from "@_persistence/types";
import type { Dependencies } from "@_persistence/dependencies";
import type { QueryListing } from "@_persistence/ports";

import { directoryFor, isMdx } from "@_persistence/utils";

type QueryCreator = (query: QueryKind) => QueryListing;

export const createListingQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system }) =>
  (query) =>
  () =>
    system
      .readdirSync(directoryFor(query))
      .filter(isMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
