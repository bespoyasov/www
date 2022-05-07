import type { QueryListing } from "./types";

import { mockSystem } from "@testing/mocks";
import { projectList, noteList } from ".";

describe("when called a query executor", () => {
  const each = it.each<QueryListing>([projectList, noteList]);

  each("executor should return a list of files without extension [#%#]", (execute) => {
    const files = ["file1.mdx", "file-2.mdx", "3.mdx"];
    const expected = ["file1", "file-2", "3"];

    const system = mockSystem({ readdirSync: () => files });
    const result = execute({ system });
    expect(result).toEqual(expected);
  });

  each("executor should keep only .mdx files and ignore other extensions [#%#]", (execute) => {
    const files = ["file1.mdx", "file2.md", "file3.tsx"];
    const expected = ["file1"];

    const system = mockSystem({ readdirSync: () => files });
    const result = execute({ system });
    expect(result).toEqual(expected);
  });
});
