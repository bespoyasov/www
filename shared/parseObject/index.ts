import JSON5 from "json5";
import { AnyObject, Nullable } from "@shared/types";

export function parseObject(text: string): Nullable<AnyObject> {
  try {
    const objectStart = text.indexOf("{");
    const objectEnding = text.lastIndexOf("}") + 1;
    return JSON5.parse(text.slice(objectStart, objectEnding));
  } catch {
    return null;
  }
}
