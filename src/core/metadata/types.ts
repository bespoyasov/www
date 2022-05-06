import type { TagKind } from "@core/tags";
import type { ImageFileSource as Cover } from "@core/image";

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
