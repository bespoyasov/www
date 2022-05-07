import type { PostContents, PostId } from "@core/post";
import type { Dependencies, Settings } from "@network/composition";
import type { ContentSource } from "@network/types";

import { dependencies, settings } from "@network/composition";

type SourceQuery = (id: PostId) => ContentSource;
type FetchContent = (id: PostId, di?: Dependencies) => Promise<PostContents>;

export function contentFor(
  query: SourceQuery,
  { serializeSettings }: Settings = settings,
): FetchContent {
  return async function request(id, { parse, serialize } = dependencies) {
    const { content } = parse(query(id));
    const { compiledSource } = await serialize(content, serializeSettings);
    return compiledSource;
  };
}
