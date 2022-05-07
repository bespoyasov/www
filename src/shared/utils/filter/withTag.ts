import type { Metadata } from "@core/metadata";
import type { TagKind } from "@core/tags";
import type { FilterFunction } from "./types";

export function withTag(tag: TagKind): FilterFunction<Metadata> {
  return function applyFilter(entity) {
    return entity.tags.includes(tag);
  };
}

export const withTravelTag = withTag("travel");
