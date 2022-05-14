import type { QueryKind } from "@persistence/types";
import type { QueryPost } from "./types";

import { join } from "path";
import { directoryFor, withMdx } from "@persistence/utils";
import { dependencies } from "@persistence/composition";

function queryFor(query: QueryKind): QueryPost {
  return function execute(postId, { system } = dependencies) {
    const directory = directoryFor(query);
    const fileName = withMdx(postId);
    return system.readFileSync(join(directory, fileName), "utf-8");
  };
}

export const getProject = queryFor("projects");
export const getNote = queryFor("notes");
export const getTalk = queryFor("talks");
