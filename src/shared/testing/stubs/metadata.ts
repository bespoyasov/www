import type { Metadata } from "@core/metadata";
import { defaultDatetime } from "./datetime";
import { ABSENT } from "./const";

function generate(overrides: OverridesFor<Metadata> = {}): Metadata {
  return {
    title: overrides.title ?? "Title",
    description: overrides.description ?? "Description",
    datetime: overrides.datetime ?? defaultDatetime,
    slug: overrides.slug ?? "/",
    tags: overrides.tags ?? [],
    cover: overrides.cover ?? ABSENT,
  };
}

export const metadataWith = generate;
export const metadata = generate();
