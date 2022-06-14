import { directoryFor, hasMdx } from "@persistence/utils";

import type { Dependencies } from "../dependencies";
import type { QueryPosts } from "./types";

export const createQueryPosts: Factory<QueryPosts, Dependencies> =
  ({ system, path, query }) =>
  () => {
    const directory = directoryFor(query);
    const posts = system
      .readdirSync(directory)
      .filter(hasMdx)
      .map((fileName) => system.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
