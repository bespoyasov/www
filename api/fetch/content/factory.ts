import { PostContents, PostId } from "@domain/post";
import { getBlogPost, getProject } from "@persistence/source";
import { Dependencies, di } from "./composition";
import { settings } from "./settings";

type Query = typeof getProject | typeof getBlogPost;
type FetchRequest = (id: PostId, di?: Dependencies) => Promise<PostContents>;

export function contentFor(query: Query): FetchRequest {
  return async function request(
    id: PostId,
    { serialize }: Dependencies = di,
  ): Promise<PostContents> {
    const source = query(id);
    const { compiledSource } = await serialize(source, settings);
    return compiledSource;
  };
}
