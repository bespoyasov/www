import remark from "remark";
import markdown from "remark-mdx";
import { List } from "@shared/types";
import { byDateDescending } from "@shared/sort";
import { parseObject } from "@shared/parseObject";
import { Metadata } from "@domain/metadata";
import { exportsOf, metadataOf } from "@domain/ast";
import { allProjects, allBlogPosts } from "@persistence/source";

type Query = typeof allProjects | typeof allBlogPosts;
type FetchRequest = () => Promise<List<Metadata>>;

export function metadataFor(query: Query): FetchRequest {
  return async function request(): Promise<List<Metadata>> {
    const posts = query();
    const results: List<Metadata> = [];

    for await (const post of posts) {
      const result = await remark()
        .use(markdown)
        .use(exportsOf, { ignoreDefaults: true })
        .use(metadataOf)
        .process(post);

      const object = parseObject<Metadata>(result.toString());
      results.push(object);
    }

    results.sort(byDateDescending);
    return results;
  };
}
