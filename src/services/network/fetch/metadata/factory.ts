import type { Metadata } from "@core/metadata";
import type { ContentSource } from "@network/types";
import type { Dependencies } from "@network/composition";

import { dependencies } from "@network/composition";
import { byDateDescending } from "@utils/sort";

type SourceQuery = () => List<ContentSource>;
type FetchMetadata = (di?: Dependencies) => List<Metadata>;

export function metadataFor(query: SourceQuery): FetchMetadata {
  return function request({ parse } = dependencies) {
    const posts = query();
    const results = posts.map((post) => parse(post).data as Metadata);
    return results.sort(byDateDescending);
  };
}
