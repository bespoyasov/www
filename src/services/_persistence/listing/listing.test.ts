import { mockSystem } from "@testing/mocks";

import type { QueryKind } from "@_persistence/types";
import { dependencies } from "@_persistence/composition";
import { createListingQueryFactory } from "./listing";

const cases: List<QueryKind> = ["notes", "projects", "talks"];
const files = ["file-1.mdx", "file-2.md", "file-3.tsx", "file-4.mdx"];
const expected = ["file-1", "file-4"];

const system = mockSystem({ readdirSync: () => files });
const createQuery = createListingQueryFactory({ ...dependencies, system });

describe.each(cases)("when called a query (%p)", (kind) => {
  const sut = createQuery(kind);
  const result = sut();

  it("should keep only MDX files and ignore other extensions", () => {
    expect(result.length).toEqual(expected.length);
  });

  it("should return a list of files without extensions", () => {
    expect(result).toEqual(expected);
  });
});
