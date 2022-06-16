import type { QueryKind } from "../types";
import type { Dependencies } from "../dependencies";
import type { QueryPost } from "../ports";

import { directoryFor, withMdx } from "../utils";

type QueryFactory = (query: QueryKind) => QueryPost;

export const createPostQueryFactory: Factory<QueryFactory, Dependencies> =
  ({ path, system }) =>
  (query) =>
  (postId) => {
    const directory = directoryFor(query);
    const fileName = withMdx(postId);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
