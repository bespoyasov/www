import type { TagKind } from "@domain/tags";
import type { ImageFileSource as Cover } from "@domain/image";

type Title = string;
type Description = string;

export type Metadata = {
  title: Title;
  description: Description;
  datetime: DateTimeIsoString;

  slug: Unique<UrlSlug>;
  tags: List<TagKind>;

  cover: Optional<Cover>;
};
