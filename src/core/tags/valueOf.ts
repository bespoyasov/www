import { Tag } from "./const";
import { TagKind } from "./types";

export function valueOf(kind: TagKind): Tag {
  return Tag[kind];
}
