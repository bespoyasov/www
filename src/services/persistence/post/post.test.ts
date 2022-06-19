import { mockSystem } from "@testing/mocks";

import type { QueryKind } from "../types";
import { dependencies } from "../composition";
import { createPostQueryFactory } from "./post";

const cases: List<QueryKind> = ["notes", "projects", "talks"];
const postId = "post";
const fileName = "post.mdx";
const fileContent = "File Content";

const readFileSync = jest.fn(() => fileContent);
const system = mockSystem({ readFileSync });
const createQuery = createPostQueryFactory({ ...dependencies, system });

afterEach(() => jest.clearAllMocks());

describe.each(cases)("when called a query (%p) with a specified post ID", (kind) => {
  it("should read the file with the post contents", () => {
    const sut = createQuery(kind);
    const result = sut(postId);

    const path = expect.stringContaining(fileName);
    const encoding = expect.stringContaining("utf-8");

    expect(readFileSync).toHaveBeenCalledWith(path, encoding);
    expect(result).toEqual(fileContent);
  });
});
