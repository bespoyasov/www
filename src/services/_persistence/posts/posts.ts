import type { QueryKind } from "../types";
import type { Dependencies } from "../dependencies";
import type { QueryPosts } from "../ports";

type QueryCreator = (query: QueryKind) => QueryPosts;

export const createPostsQueryFactory: Factory<QueryCreator, Dependencies> =
  ({ system, path }) =>
  (query) =>
  () => {
    const posts = system
      .readdirSync(query)
      .map((fileName) => system.readFileSync(path.join(query, fileName), "utf-8"));

    return posts;
  };
