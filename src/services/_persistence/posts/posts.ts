import type { QueryPosts } from "@_persistence/ports";
import type { QueryKind } from "@_persistence/types";
import type { Dependencies } from "@_persistence/dependencies";

import { directoryFor, isMdx } from "@_persistence/utils";

type QueryCreator = (query: QueryKind) => QueryPosts;

export const createPostsQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system, path }) =>
  (query) =>
  () => {
    const directory = directoryFor(query);
    const posts = system
      .readdirSync(directory)
      .filter(isMdx)
      .map((fileName) => system.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
