import { createTree, createNode } from "@shared/stubs";
import { metadataOf } from ".";

describe("domain > AST > metadataOf", () => {
  it("should return a `transformer` function", () => {
    const transformer = metadataOf();
    expect(typeof transformer).toBe("function");
  });

  it("should keep the `root` node in a given tree", () => {
    const tree = createTree();
    const transformer = metadataOf();
    const filtered = transformer(tree);
    expect(filtered).toEqual(tree);
  });

  it("should keep only the `metadata` nodes in a given tree", () => {
    const metadata = createNode("metadata");
    const nonMetadata = createNode();
    const initialTree = createTree([metadata, nonMetadata]);
    const expectedTree = createTree([metadata]);

    const transformer = metadataOf();
    const filtered = transformer(initialTree);
    expect(filtered).toEqual(expectedTree);
  });

  it("should return `null` if all children are non-metadata nodes", () => {
    const node = createNode();
    const tree = createTree([node]);

    const transformer = metadataOf();
    const filtered = transformer(tree);
    expect(filtered).toEqual(null);
  });
});
