import { Metadata } from "@domain/metadata";
import { TagKind } from "@domain/tags";
import { FilterFunction } from "./types";

export function withTag(tag: TagKind): FilterFunction<Metadata> {
  return function applyFilter(entity) {
    return entity.tags.includes(tag);
  };
}

export const withTravelTag = withTag("Travel");
