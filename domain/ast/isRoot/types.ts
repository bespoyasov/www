import { List } from "@shared/types";
import { SimpleNode } from "@domain/ast/types";
import { ROOT_NODE_TYPE } from "./const";

export interface RootNode extends SimpleNode {
  type: typeof ROOT_NODE_TYPE;
  children: List<SimpleNode>;
}
