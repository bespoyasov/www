import { SimpleNode } from "../types";
import { EXPORT_NODE_TYPE } from "./const";

export type AttacherSettings = {
  ignoreNamed?: boolean;
  ignoreDefaults?: boolean;
};

export interface ExportNode extends SimpleNode {
  type: typeof EXPORT_NODE_TYPE;
}
