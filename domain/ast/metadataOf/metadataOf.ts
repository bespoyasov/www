import filter from "unist-util-filter";
import { Transformer, SimpleNode, isRoot } from "@domain/ast";
import { MetadataNode } from "./types";
import { METADATA_TOKEN } from "./const";

export function metadataOf(): Transformer {
  return function transformer(tree: SimpleNode) {
    return filter(tree, (node: SimpleNode): node is MetadataNode => {
      return isRoot(node) || String(node.value).includes(METADATA_TOKEN);
    });
  };
}
