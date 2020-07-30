import fs from "fs";
import { List } from "@shared/types";
import { PostId } from "@domain/post";
import { PROJECTS_DIRECTORY, BLOG_DIRECTORY } from "@persistence/const";

type QueryKind = typeof PROJECTS_DIRECTORY | typeof BLOG_DIRECTORY;
type Executor = () => List<PostId>;

function queryFor(directory: QueryKind): Executor {
  return function execute(): List<PostId> {
    return fs
      .readdirSync(directory)
      .filter((fileName) => fileName.includes(".mdx"))
      .map((fileName) => fileName.replace(".mdx", ""));
  };
}

export const projectsList = queryFor(PROJECTS_DIRECTORY);
export const blogPostsList = queryFor(BLOG_DIRECTORY);
