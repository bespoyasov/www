import path from "path";
import { PostContents, PostId } from "@domain/post";
import { withMdx } from "@persistence/utils";
import { QueryKind } from "@persistence/types";
import { Dependencies, di } from "@persistence/composition";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";

type Executor = (id: PostId, di?: Dependencies) => PostContents;

function queryFor(directory: QueryKind): Executor {
  return function execute(id: PostId, { system }: Dependencies = di): PostContents {
    const fileName = withMdx(id);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
}

export const getProject = queryFor(PROJECTS_DIRECTORY);
export const getBlogPost = queryFor(BLOG_DIRECTORY);
