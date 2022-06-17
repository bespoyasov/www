import { mockSystem } from "@testing/mocks";

import type { QueryKind } from "@_persistence/types";
import { dependencies } from "@_persistence/composition";
import { createPostsQueryFactory } from "./posts";

const cases: List<QueryKind> = ["notes", "projects", "talks"];

const fileName = "file.mdx";
const fileContent = "The file content.";
const fileList = Array(3).fill(fileName);

const readdirSync = jest.fn(() => fileList);
const readFileSync = jest.fn(() => fileContent);
const system = mockSystem({ readdirSync, readFileSync });
const createQuery = createPostsQueryFactory({ ...dependencies, system });

afterEach(() => jest.clearAllMocks());

describe.each(cases)("when called a query (%p)", (kind) => {
  it("should read all MDX files in the according directory", () => {
    const sut = createQuery(kind);
    const result = sut();

    expect(readdirSync).toHaveBeenCalledWith(expect.stringContaining(kind));
    expect(readFileSync).toHaveBeenCalledTimes(fileList.length);
    expect(result).toEqual(Array(fileList.length).fill(fileContent));
  });
});
