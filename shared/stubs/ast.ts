import { SimpleNode } from "@domain/ast";
import { RootNode } from "@domain/ast/isRoot/types";

export function createTree(children: SimpleNode[] = []): RootNode {
  return { type: "root", children };
}

export function createNode(value?: string): SimpleNode {
  return { type: "node", value };
}
