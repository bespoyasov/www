import type { QueryKind } from "@persistence/types";
import { mockSystem } from "@testing/mocks";

import { defaultDependencies } from "./dependencies";
import { createQueryPost } from "./factory";

const postId = "file1";
const fileName = "file1.mdx";
const queries: List<QueryKind> = ["notes", "projects", "talks"];

describe("when called a query executor with a post id", () => {
  const readFileSync = jest.fn();
  const system = mockSystem({ readFileSync });

  it.each(queries)("should read the file with the post contents (%p)", (query) => {
    const sut = createQueryPost({ ...defaultDependencies, system, query });
    sut(postId);

    expect(readFileSync.mock.calls[0][0].endsWith(fileName)).toBe(true);
    expect(readFileSync.mock.calls[0][1]).toEqual("utf-8");
  });
});
