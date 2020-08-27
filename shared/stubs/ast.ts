import { SimpleNode } from "@domain/ast";
import { ExportNode } from "@domain/ast/exportsOf/types";
import { RootNode } from "@domain/ast/isRoot/types";

export function createTree(children: SimpleNode[] = []): RootNode {
  return { type: "root", children };
}

export function createNode(value?: string): SimpleNode {
  return { type: "node", value };
}

export function createExportNode(kind: "named" | "default"): ExportNode {
  return { type: "export", default: kind === "default" };
}
