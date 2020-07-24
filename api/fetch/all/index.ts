import remark from "remark";
import markdown from "remark-mdx";
import { List } from "@shared/types";
import { parseObject } from "@shared/parseObject";
import { Metadata } from "@domain/metadata";
import { exportsOf, metadataOf } from "@domain/ast";
import { allProjects, allBlogPosts } from "@persistence/source";

type Query = typeof allProjects | typeof allBlogPosts;
type FetchRequest = () => Promise<List<Metadata>>;

function requestFor(query: Query): FetchRequest {
  return async function fetchData(): Promise<List<Metadata>> {
    const posts = query();
    const results = [];

    for await (const post of posts) {
      const result = await remark()
        .use(markdown)
        .use(exportsOf, { ignoreDefaults: true })
        .use(metadataOf)
        .process(post);

      const object = parseObject(result.toString());
      results.push(object);
    }

    return results;
  };
}

export const fetchProjects = requestFor(allProjects);
export const fetchBlogPosts = requestFor(allBlogPosts);
