import { PostId } from "@domain/post";
import { onlyMdx } from "@persistence/utils";
import { QueryKind } from "@persistence/types";
import { Dependencies, di } from "@persistence/composition";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";

type Executor = (di?: Dependencies) => List<PostId>;

function queryFor(directory: QueryKind): Executor {
  return function execute({ system }: Dependencies = di): List<PostId> {
    return system
      .readdirSync(directory)
      .filter(onlyMdx)
      .map((fileName) => fileName.replace(".mdx", ""));
  };
}

export const projectsList = queryFor(PROJECTS_DIRECTORY);
export const blogPostsList = queryFor(BLOG_DIRECTORY);
