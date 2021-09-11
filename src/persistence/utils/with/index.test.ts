import { withMdx } from ".";

describe("when given a filename", () => {
  it("should concatenate it with the `.mdx` extension", () => {
    expect(withMdx("filename")).toEqual("filename.mdx");
  });
});
