import type { Metadata } from "@domain/metadata";
import { OverloadsFor } from "./types";
import { defaultDatetime } from "./datetime";

export function generate(overloads: OverloadsFor<Metadata> = {}): Metadata {
  return {
    title: overloads.title ?? "Title",
    description: overloads.description ?? "Description",
    datetime: overloads.datetime ?? defaultDatetime,
    slug: overloads.slug ?? "/",
    tags: overloads.tags ?? [],
    cover: overloads.cover,
  };
}

export const metadata = generate();
