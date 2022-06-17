import type { QueryPost } from "@persistence/ports";
import type { QueryKind } from "@persistence/types";
import type { Dependencies } from "@persistence/dependencies";

import { directoryFor, withMdx } from "@persistence/utils";

type QueryFactory = (query: QueryKind) => QueryPost;

export const createPostQueryFactory: Factory<QueryFactory, Dependencies> =
  ({ path, system }) =>
  (query) =>
  (postId) => {
    const directory = directoryFor(query);
    const fileName = withMdx(postId);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
