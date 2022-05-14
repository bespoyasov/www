import type { QueryPosts } from "./types";

import { mockSystem } from "@testing/mocks";
import { allProjects, allNotes, allTalks } from ".";

const fileName = "file.mdx";
const fileContent = "The file content.";
const fileList = Array(3).fill(fileName);

describe("when called a query executor", () => {
  const each = it.each<QueryPosts>([allProjects, allNotes, allTalks]);

  const readdirSync = jest.fn(() => fileList);
  const readFileSync = jest.fn(() => fileContent);
  const system = mockSystem({ readdirSync, readFileSync });

  each("executor should read all the .mdx files in the according directory [#%#]", (execute) => {
    const expected = fileList.map(() => fileContent);
    const result = execute({ system });
    expect(result).toEqual(expected);
  });

  each("should read files with the UTF-8 encoding [#%#]", (execute) => {
    execute({ system });
    expect(readFileSync.mock.calls[0]).toContain("utf-8");
  });
});
