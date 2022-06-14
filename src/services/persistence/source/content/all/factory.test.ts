import type { QueryKind } from "@persistence/types";
import { mockSystem } from "@testing/mocks";

import { dependencies } from "../dependencies";
import { createQueryPosts } from "./factory";

const fileName = "file.mdx";
const fileContent = "The file content.";
const fileList = Array(3).fill(fileName);

const readdirSync = jest.fn(() => fileList);
const readFileSync = jest.fn(() => fileContent);
const system = mockSystem({ readdirSync, readFileSync });

const each = it.each<QueryKind>(["notes", "projects", "talks"]);

describe("when called a query executor", () => {
  each("executor should read all the .mdx files in the according directory (%p)", (query) => {
    const expected = fileList.map(() => fileContent);
    const sut = createQueryPosts({ ...dependencies, system, query });
    expect(sut()).toEqual(expected);
  });

  each("should read files with the UTF-8 encoding (%p)", (query) => {
    const sut = createQueryPosts({ ...dependencies, system, query });
    sut();

    expect(readFileSync.mock.calls[0]).toContain("utf-8");
  });
});
