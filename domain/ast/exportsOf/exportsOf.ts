import filter from "unist-util-filter";
import { SimpleNode, Transformer, isRoot } from "@domain/ast";

import { ExportNode, AttacherSettings } from "./types";
import { defaultSettings } from "./settings";
import { EXPORT_NODE_TYPE } from "./const";

export function exportsOf({ ignoreNamed, ignoreDefaults }: AttacherSettings = defaultSettings): Transformer {
  return function transformer(tree: SimpleNode): SimpleNode {
    return filter(tree, (node: SimpleNode): node is ExportNode => {
      const isExport = node.type === EXPORT_NODE_TYPE;
      const isNamed = isExport && !node.default;
      const isDefault = isExport && !!node.default;

      return isRoot(node) || (isNamed && !ignoreNamed) || (isDefault && !ignoreDefaults);
    });
  };
}
