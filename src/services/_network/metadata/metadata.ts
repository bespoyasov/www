import type { Metadata } from "@core/metadata";
import type { QueryListing } from "@persistence/ports";

import type { FetchMetadata } from "@_network/ports";
import type { Dependencies } from "@_network/dependencies";

import { byDateDescending } from "@utils/sort";

type FetchMetadataBuilder = (query: QueryListing) => FetchMetadata;

export const createFetchMetadataFactory: Factory<FetchMetadataBuilder, Dependencies> =
  ({ parse }) =>
  (query) =>
  () => {
    const posts = query();
    const results = posts.map((post) => parse(post).data as Metadata);
    return results.sort(byDateDescending);
  };
