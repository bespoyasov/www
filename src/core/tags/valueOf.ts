import type { TagKind, TagName } from "./types";
import { tags } from "./const";

export function valueOf(tag: TagKind): TagName {
  return tags[tag];
}
