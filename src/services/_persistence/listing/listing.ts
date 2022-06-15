import type { Dependencies } from "../dependencies";
import type { QueryListing } from "../ports";

export const createQueryListing: Factory<QueryListing, Dependencies> =
  ({ system, query }) =>
  () =>
    system.readdirSync(query).map((fileName) => fileName.replace(".mdx", ""));
