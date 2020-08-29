import { RelativePath } from "@shared/types";
import { mockSystem } from "@shared/mocks";
import { projectsList, blogPostsList } from ".";

describe("persistence > source > names > executor", () => {
  it("should return a list of filenames without extensions in projects directory", () => {
    const files = ["file1.mdx", "file2.mdx", "3.mdx"];
    const expected = ["file1", "file2", "3"];
    const system = mockSystem({ readdirSync: () => files });
    expect(projectsList({ system })).toEqual(expected);
  });

  it("should keep only .mdx files and filter out every other extension", () => {
    const files = ["file1.mdx", "file2.mdx", "file3.md", "file4.tsx", "file5.ts"];
    const expected = ["file1", "file2"];
    const system = mockSystem({ readdirSync: () => files });
    expect(projectsList({ system })).toEqual(expected);
  });
});

type Executor = typeof projectsList | typeof blogPostsList;

function testDirectory(directory: RelativePath, executor: Executor): void {
  const readdirSync = jest.fn(() => []);
  const system = mockSystem({ readdirSync });

  executor({ system });
  expect(readdirSync).toHaveBeenCalledWith(process.cwd() + directory);
}

describe("persistence > source > names > projectsList", () => {
  it("should read projects directory", () => testDirectory("/pages/projects", projectsList));
});

describe("persistence > source > names > blogPostsList", () => {
  it("should read blog directory", () => testDirectory("/pages/blog", blogPostsList));
});
