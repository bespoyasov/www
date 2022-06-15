import type { Dependencies } from "../dependencies";
import type { QueryPosts } from "../ports";

export const createQueryPosts: Factory<QueryPosts, Dependencies> =
  ({ system, path, query }) =>
  () => {
    const posts = system
      .readdirSync(query)
      .map((fileName) => system.readFileSync(path.join(query, fileName), "utf-8"));

    return posts;
  };
