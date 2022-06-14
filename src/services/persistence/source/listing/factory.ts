import type { Dependencies } from "./dependencies";
import type { QueryListing } from "./types";

export const createQueryFactory: Factory<QueryListing, Dependencies> =
  ({ system, directoryFor, hasMdx, query }) =>
  () =>
    system
      .readdirSync(directoryFor(query))
      .filter(hasMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
