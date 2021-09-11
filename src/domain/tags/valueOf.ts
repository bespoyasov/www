import { Tag, TagKind } from "./types";

export function valueOf(kind: TagKind): Tag {
  return Tag[kind];
}
