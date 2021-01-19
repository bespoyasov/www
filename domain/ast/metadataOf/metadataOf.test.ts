import { createTree, createNode } from "@shared/stubs";
import { metadataOf } from ".";

describe("when called a factory", () => {
  it("should return a `transformer` function", () => {
    const transformer = metadataOf();
    expect(typeof transformer).toBe("function");
  });
});

describe("when the transformer is given a tree", () => {
  it("should keep the `root` node in the given tree", () => {
    const tree = createTree();
    const transformer = metadataOf();
    const filtered = transformer(tree);
    expect(filtered).toEqual(tree);
  });

  it("should keep only the `metadata` nodes in the given tree", () => {
    const metadata = createNode("metadata");
    const nonMetadata = createNode();
    const initialTree = createTree([metadata, nonMetadata]);
    const expectedTree = createTree([metadata]);

    const transformer = metadataOf();
    const filtered = transformer(initialTree);
    expect(filtered).toEqual(expectedTree);
  });
});

describe("when the transformer is given a tree without metadata nodes", () => {
  it("should return `null`", () => {
    const node = createNode();
    const tree = createTree([node]);

    const transformer = metadataOf();
    const filtered = transformer(tree);
    expect(filtered).toEqual(null);
  });
});
