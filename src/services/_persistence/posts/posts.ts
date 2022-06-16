import type { QueryKind } from "../types";
import type { Dependencies } from "../dependencies";
import type { QueryPosts } from "../ports";

import { directoryFor, isMdx } from "../utils";

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
