import type { QueryKind } from "@persistence/types";
import type { QueryListing } from "./types";

import { directoryFor, hasMdx } from "@persistence/utils";
import { dependencies } from "@persistence/composition";

function queryFor(query: QueryKind): QueryListing {
  return function execute({ system } = dependencies) {
    return system
      .readdirSync(directoryFor(query))
      .filter(hasMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
  };
}

export const projectList = queryFor("projects");
export const noteList = queryFor("notes");
