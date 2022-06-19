import type { Metadata } from "@core/metadata";
import type { QueryListing } from "@persistence/ports";

import type { FetchMetadata } from "@network/ports";
import type { Dependencies } from "@network/dependencies";

import { byDateDescending } from "@utils/sort";

type FetchMetadataBuilder = (query: QueryListing) => FetchMetadata;

export const createFetchMetadataFactory: Factory<FetchMetadataBuilder, Dependencies> =
  ({ parse }) =>
  (queryMetadata) =>
  () => {
    const posts = queryMetadata();
    const results = posts.map((post) => parse(post).data as Metadata);
    return results.sort(byDateDescending);
  };
