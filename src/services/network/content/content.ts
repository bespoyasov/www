import type { QueryPost } from "@services/persistence";

import type { Dependencies } from "../dependencies";
import type { FetchContent } from "../ports";

type FetchContentBuilder = (query: QueryPost) => FetchContent;

export const createFetchContentFactory: Factory<FetchContentBuilder, Dependencies> =
  ({ parse, serialize, settings }) =>
  (queryPost) =>
  async (postId) => {
    const { content } = parse(queryPost(postId));
    const { compiledSource } = await serialize(content, settings.serialize);
    return compiledSource;
  };
