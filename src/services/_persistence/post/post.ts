import type { QueryPost } from "@_persistence/ports";
import type { QueryKind } from "@_persistence/types";
import type { Dependencies } from "@_persistence/dependencies";

import { directoryFor, withMdx } from "@_persistence/utils";

type QueryFactory = (query: QueryKind) => QueryPost;

export const createPostQueryFactory: Factory<QueryFactory, Dependencies> =
  ({ path, system }) =>
  (query) =>
  (postId) => {
    const directory = directoryFor(query);
    const fileName = withMdx(postId);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
