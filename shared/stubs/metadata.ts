import { Metadata } from "@domain/metadata";
import { OverloadsFor } from "./types";

export function generate(overloads: OverloadsFor<Metadata> = {}): Metadata {
  return {
    title: overloads.title ?? "Title",
    description: overloads.description ?? "Description",
    datetime: overloads.datetime ?? "2020-08-04T12:00:00.000Z",
    slug: overloads.slug ?? "/",
    tags: overloads.tags ?? [],
  };
}

export const metadata = generate();
