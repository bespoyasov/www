import path from "path";
import { PostContents, PostId } from "@domain/post";
import { directoryFor, withMdx } from "@persistence/utils";
import { Dependencies, di } from "@persistence/composition";
import { QueryKind } from "@persistence/types";

type Executor = (id: PostId, di?: Dependencies) => PostContents;

function queryFor(query: QueryKind): Executor {
  return function execute(id: PostId, { system }: Dependencies = di): PostContents {
    const directory = directoryFor(query);
    const fileName = withMdx(id);
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
}

export const getProject = queryFor("projects");
export const getBlogPost = queryFor("blog");
