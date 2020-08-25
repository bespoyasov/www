import { assureType } from "@shared/assureType";
import { SystemType } from "../composition";
import { projectsList } from ".";

function mockSystem(method: keyof SystemType, implementation: () => unknown): SystemType {
  return assureType<SystemType>({ [method]: implementation });
}

describe("persistence > source > names > executor", () => {
  it("should return a list of filenames without extensions in projects directory", () => {
    const files = ["file1.mdx", "file2.mdx", "3.mdx"];
    const expected = ["file1", "file2", "3"];
    const system = mockSystem("readdirSync", () => files);
    expect(projectsList({ system })).toEqual(expected);
  });

  it("should keep only .mdx files and filter out every other extension", () => {
    const files = ["file1.mdx", "file2.mdx", "file3.md", "file4.tsx", "file5.ts"];
    const expected = ["file1", "file2"];
    const system = mockSystem("readdirSync", () => files);
    expect(projectsList({ system })).toEqual(expected);
  });
});
