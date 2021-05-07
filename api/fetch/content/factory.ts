import { PostId } from "@domain/post";
import { getBlogPost, getProject } from "@persistence/source";
import { Dependencies, di } from "./composition";
import { SerializedPost } from "./types";

type Query = typeof getProject | typeof getBlogPost;
type FetchRequest = (id: PostId, di?: Dependencies) => Promise<SerializedPost>;

export function contentFor(query: Query): FetchRequest {
  return async function request(
    id: PostId,
    { serialize }: Dependencies = di,
  ): Promise<SerializedPost> {
    const source = query(id);
    return serialize(source);
  };
}
