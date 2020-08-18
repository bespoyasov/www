import { TagKind, Tag, valueOf } from "@domain/tags";
import { Comparable } from "@shared/types";
import { sortWith } from "./sortWith";

function comparableTagValue(tag: TagKind): Comparable<Tag> {
  return valueOf(tag);
}

export const byTagValue = sortWith(comparableTagValue);
