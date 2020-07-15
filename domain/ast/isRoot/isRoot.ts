import { SimpleNode } from "@domain/ast";
import { RootNode } from "./types";
import { ROOT_NODE_TYPE } from "./const";

export function isRoot(node: SimpleNode): node is RootNode {
  return node.type === ROOT_NODE_TYPE;
}
