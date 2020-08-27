import { createTree, createExportNode, createNode } from "@shared/stubs";
import { exportsOf } from ".";

describe("domain > AST > exportsOf", () => {
  it("should return a transformer function", () => {
    const transformer = exportsOf();
    expect(typeof transformer).toBe("function");
  });

  it("should keep the `root` node in a given tree", () => {
    const tree = createTree();
    const transform = exportsOf();
    expect(transform(tree)).toEqual(tree);
  });

  it("should filter out any node except for export nodes", () => {
    const simpleNode = createNode();
    const namedExport = createExportNode("named");
    const defaultExport = createExportNode("default");
    const initialTree = createTree([simpleNode, namedExport, defaultExport]);
    const expectedTree = createTree([namedExport, defaultExport]);

    const transform = exportsOf();
    expect(transform(initialTree)).toEqual(expectedTree);
  });

  it("should not keep a named import node if not allowed", () => {
    const namedExport = createExportNode("named");
    const defaultExport = createExportNode("default");
    const initialTree = createTree([namedExport, defaultExport]);
    const expectedTree = createTree([defaultExport]);

    const transform = exportsOf({ ignoreNamed: true });
    expect(transform(initialTree)).toEqual(expectedTree);
  });

  it("should not keep a default import node if not allowed", () => {
    const namedExport = createExportNode("named");
    const defaultExport = createExportNode("default");
    const initialTree = createTree([namedExport, defaultExport]);
    const expectedTree = createTree([namedExport]);

    const transform = exportsOf({ ignoreDefaults: true });
    expect(transform(initialTree)).toEqual(expectedTree);
  });
});
