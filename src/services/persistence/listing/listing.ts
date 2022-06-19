import type { QueryKind } from "../types";
import type { Dependencies } from "../dependencies";
import type { QueryListing } from "../ports";

import { directoryFor, isMdx } from "../utils";

type QueryCreator = (query: QueryKind) => QueryListing;

export const createListingQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system }) =>
  (query) =>
  () =>
    system
      .readdirSync(directoryFor(query))
      .filter(isMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
