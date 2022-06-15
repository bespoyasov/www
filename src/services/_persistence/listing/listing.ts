import type { QueryKind } from "../types";
import type { Dependencies } from "../dependencies";
import type { QueryListing } from "../ports";

type QueryCreator = (query: QueryKind) => QueryListing;

export const createListingQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system }) =>
  (query) =>
  () =>
    system.readdirSync(query).map((fileName) => fileName.replace(".mdx", ""));
