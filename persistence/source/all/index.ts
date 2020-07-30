import fs from "fs";
import path from "path";
import { List } from "@shared/types";
import { PostContents } from "@domain/post";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";

type QueryKind = typeof PROJECTS_DIRECTORY | typeof BLOG_DIRECTORY;
type Executor = () => List<PostContents>;

function queryFor(directory: QueryKind): Executor {
  return function execute(): List<PostContents> {
    const posts = fs
      .readdirSync(directory)
      .filter((fileName) => fileName.includes(".mdx"))
      .map((fileName) => fs.readFileSync(path.join(directory, fileName), "utf-8"));

    return posts;
  };
}

export const allProjects = queryFor(PROJECTS_DIRECTORY);
export const allBlogPosts = queryFor(BLOG_DIRECTORY);
