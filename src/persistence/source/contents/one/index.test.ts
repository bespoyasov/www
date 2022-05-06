import { getBlogPost, getProject } from ".";
import { mockSystem } from "@utils/mocks";

const postId = "post";
const fileName = "post.mdx";

describe("when called an executor", () => {
  it("should read an .mdx file with a given name", () => {
    const readFileSync = jest.fn();
    const system = mockSystem({ readFileSync });

    getProject(postId, { system });
    expect(readFileSync.mock.calls[0][0].endsWith(fileName)).toBe(true);
  });
});

type Executor = typeof getProject | typeof getBlogPost;

function testFileDirectory(directory: RelativePath, execute: Executor): void {
  const fullPath = `${directory}/${fileName}`;
  const readFileSync = jest.fn();
  const system = mockSystem({ readFileSync });

  execute(postId, { system });
  expect(readFileSync.mock.calls[0][0].endsWith(fullPath)).toBe(true);
}

describe("when called `getProject`", () => {
  it("should read a file from the projects directory", () =>
    testFileDirectory("data/projects", getProject));
});

describe("when called `getBlogPost`", () => {
  it("should read a file from the projects directory", () =>
    testFileDirectory("data/blog", getBlogPost));
});
