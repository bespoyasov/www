import path from "path";
import { List } from "@shared/types";
import { PostContents } from "@domain/post";
import { onlyMdx } from "@persistence/utils";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";
import { Dependencies, di } from "../composition";

type QueryKind = typeof PROJECTS_DIRECTORY | typeof BLOG_DIRECTORY;
type Executor = () => List<PostContents>;

function queryFor(directory: QueryKind, { system }: Dependencies = di): Executor {
  return function execute(): List<PostContents> {
    const posts = system
      .readdirSync(directory)
      .filter(onlyMdx)
      .map((fileName) => system.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
}

export const allProjects = queryFor(PROJECTS_DIRECTORY);
export const allBlogPosts = queryFor(BLOG_DIRECTORY);
