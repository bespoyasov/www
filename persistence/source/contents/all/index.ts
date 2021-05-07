import path from "path";
import { PostContents } from "@domain/post";
import { onlyMdx, directoryFor } from "@persistence/utils";
import { Dependencies, di } from "@persistence/composition";
import { QueryKind } from "@persistence/types";

type Executor = (di?: Dependencies) => List<PostContents>;

function queryFor(query: QueryKind): Executor {
  return function execute({ system }: Dependencies = di): List<PostContents> {
    const directory = directoryFor(query);
    const posts = system
      .readdirSync(directory)
      .filter(onlyMdx)
      .map((fileName) => system.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
}

export const allProjects = queryFor("projects");
export const allBlogPosts = queryFor("blog");
