import type { QueryKind } from "@persistence/types";
import type { QueryPosts } from "./types";

import { join } from "path";
import { directoryFor, hasMdx } from "@persistence/utils";
import { dependencies } from "@persistence/composition";

function queryFor(query: QueryKind): QueryPosts {
  return function execute({ system } = dependencies) {
    const directory = directoryFor(query);
    const posts = system
      .readdirSync(directory)
      .filter(hasMdx)
      .map((fileName) => system.readFileSync(join(directory, fileName), "utf-8"));

    return posts;
  };
}

export const allProjects = queryFor("projects");
export const allNotes = queryFor("notes");
export const allTalks = queryFor("talks");
