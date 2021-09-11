import { Metadata } from "@domain/metadata";
import { allProjects, allBlogPosts } from "@persistence/source";
import { Settings, settings } from "./settings";
import { Dependencies, di } from "./composition";

type Query = typeof allProjects | typeof allBlogPosts;
type FetchRequest = (di?: Dependencies) => List<Metadata>;

export function metadataFor(query: Query, { sorter }: Settings = settings): FetchRequest {
  return function request({ parser }: Dependencies = di): List<Metadata> {
    const posts = query();
    const results: List<Metadata> = [];

    for (const post of posts) {
      const object = parser(post).data as Metadata;
      results.push(object);
    }

    results.sort(sorter);
    return results;
  };
}
