import path from "path";
import { PostContents } from "@domain/post";
import { onlyMdx } from "@persistence/utils";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";
import { Dependencies, di, QueryKind } from "@persistence/composition";

type Executor = (di?: Dependencies) => List<PostContents>;

function queryFor(directory: QueryKind): Executor {
  return function execute({ system }: Dependencies = di): List<PostContents> {
    const posts = system
      .readdirSync(directory)
      .filter(onlyMdx)
      .map((fileName) => system.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
}

export const allProjects = queryFor(PROJECTS_DIRECTORY);
export const allBlogPosts = queryFor(BLOG_DIRECTORY);
