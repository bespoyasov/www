import type { Metadata } from "@domain/metadata";
import type { SummaryCard } from "./types";
import { DEFAULT_CARD } from "./const";

export function unwrap(metadata?: Metadata): SummaryCard {
  const { title, description, cover: maybeCover } = metadata ?? DEFAULT_CARD;
  const cover = maybeCover ?? DEFAULT_CARD.cover;
  return { title, description, cover };
}
