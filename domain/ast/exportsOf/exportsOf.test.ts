import { createTree, createExportNode, createNode } from "@shared/stubs";
import { exportsOf } from ".";

describe("when called a factory", () => {
  it("should return a transformer function", () => {
    const transformer = exportsOf();
    expect(typeof transformer).toBe("function");
  });
});

describe("when called the transformer with the default settings", () => {
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
});

describe("when `ignoreNamed` option is specified", () => {
  it("should not keep named import nodes", () => {
    const namedExport = createExportNode("named");
    const defaultExport = createExportNode("default");
    const initialTree = createTree([namedExport, defaultExport]);
    const expectedTree = createTree([defaultExport]);

    const transform = exportsOf({ ignoreNamed: true });
    expect(transform(initialTree)).toEqual(expectedTree);
  });
});

describe("when `ignoreDefaults` option is specified", () => {
  it("should not keep default import nodes", () => {
    const namedExport = createExportNode("named");
    const defaultExport = createExportNode("default");
    const initialTree = createTree([namedExport, defaultExport]);
    const expectedTree = createTree([namedExport]);

    const transform = exportsOf({ ignoreDefaults: true });
    expect(transform(initialTree)).toEqual(expectedTree);
  });
});
