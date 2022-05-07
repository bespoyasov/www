import { allProjects, allBlogPosts } from ".";
import { mockSystem } from "@utils/mocks";

const fileName = "file.mdx";
const fileContent = "The file content.";

describe("persistence > source > contents > execute", () => {
  it("should read each .mdx file in a given directory", () => {
    const system = mockSystem({
      readdirSync: () => [fileName, fileName],
      readFileSync: () => fileContent,
    });

    const result = allProjects({ system });
    expect(result).toEqual([fileContent, fileContent]);
  });

  it("should read files in the utf-8 encoding", () => {
    const readFileSync = jest.fn();
    const system = mockSystem({
      readdirSync: () => [fileName],
      readFileSync,
    });

    allProjects({ system });
    expect(readFileSync.mock.calls[0][1]).toEqual("utf-8");
  });
});

type Executor = typeof allProjects | typeof allBlogPosts;

function testFileDirectory(directory: RelativePath, execute: Executor): void {
  const fullPath = `${directory}/${fileName}`;

  const readFileSync = jest.fn();
  const system = mockSystem({
    readdirSync: () => [fileName],
    readFileSync,
  });

  execute({ system });
  expect(readFileSync.mock.calls[0][0].endsWith(fullPath)).toBe(true);
}

describe("persistence > source > contents > allProjects", () => {
  it("should read files from a projects directory", () =>
    testFileDirectory("data/projects", allProjects));
});

describe("persistence > source > contents > allProjects", () => {
  it("should read files from a blog directory", () => testFileDirectory("data/blog", allBlogPosts));
});
