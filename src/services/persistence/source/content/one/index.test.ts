import type { QueryPost } from "./types";

import { mockSystem } from "@testing/mocks";
import { getProject, getNote } from ".";

const postId = "post";
const fileName = "post.mdx";

describe("when called a query executor with a post id", () => {
  const readFileSync = jest.fn();
  const system = mockSystem({ readFileSync });

  const each = it.each<QueryPost>([getProject, getNote]);

  each("executor should read the file with the post contents [#%#]", (execute) => {
    execute(postId, { system });
    expect(readFileSync.mock.calls[0][0].endsWith(fileName)).toBe(true);
  });

  each("executor should read the file with the UTF-8 encoding [#%#]", (execute) => {
    execute(postId, { system });
    expect(readFileSync.mock.calls[0][1]).toEqual("utf-8");
  });
});
