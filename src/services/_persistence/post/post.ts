import type { Dependencies } from "../dependencies";
import type { QueryPost } from "../ports";

export const createQueryPost: Factory<QueryPost, Dependencies> =
  ({ path, system, query }) =>
  (postId) => {
    const directory = query;
    const fileName = postId;
    return system.readFileSync(path.join(directory, fileName), "utf-8");
  };
