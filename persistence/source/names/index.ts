import { PostId } from "@domain/post";
import { onlyMdx } from "@persistence/utils";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";
import { Dependencies, di, QueryKind } from "../composition";

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
