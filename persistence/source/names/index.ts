import { PostId } from "@domain/post";
import { onlyMdx, directoryFor } from "@persistence/utils";
import { Dependencies, di } from "@persistence/composition";
import { QueryKind } from "@persistence/types";

type Executor = (di?: Dependencies) => List<PostId>;

function queryFor(query: QueryKind): Executor {
  return function execute({ system }: Dependencies = di): List<PostId> {
    return system
      .readdirSync(directoryFor(query))
      .filter(onlyMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
  };
}

export const projectsList = queryFor("projects");
export const blogPostsList = queryFor("blog");
