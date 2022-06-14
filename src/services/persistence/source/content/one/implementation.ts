import { directoryFor, withMdx } from "@persistence/utils";

import type { Dependencies } from "../dependencies";
import type { QueryPost } from "./types";

export const createQueryPost: Factory<QueryPost, Dependencies> =
  ({ path, system, query: queryKind }) =>
  (postId) => {
    const directory = directoryFor(queryKind);
    const fileName = withMdx(postId);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
