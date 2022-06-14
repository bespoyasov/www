import type { QueryKind } from "@persistence/types";

import { mockSystem } from "@testing/mocks";
import { dependencies } from "./dependencies";
import { createQueryListing } from "./factory";

describe("when called a query", () => {
  const queries: List<QueryKind> = ["notes", "projects", "talks"];

  it.each(queries)("should return a list of files without extension [#%#]", (query) => {
    const files = ["file1.mdx", "file2.mdx", "file-3.mdx"];
    const system = mockSystem({ readdirSync: () => files });
    const sut = createQueryListing({ ...dependencies, system, query });

    expect(sut()).toEqual(["file1", "file2", "file-3"]);
  });

  it.each(queries)("should keep only MDX files and ignore other extensions [#%#]", (query) => {
    const files = ["file1.mdx", "file2.md", "file3.tsx"];
    const system = mockSystem({ readdirSync: () => files });
    const sut = createQueryListing({ ...dependencies, system, query });

    expect(sut()).toEqual(["file1"]);
  });
});
