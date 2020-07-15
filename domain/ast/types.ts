import { Node } from "unist";

export type SimpleNode = Node;
export type Transformer = (node: SimpleNode) => SimpleNode;
