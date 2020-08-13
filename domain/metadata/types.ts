import { List, Unique, DateTimeIsoString, UrlSlug } from "@shared/types";
import { TagKind } from "@domain/tags";

type Title = string;
type Description = string;

export type Metadata = {
  title: Title;
  description: Description;
  datetime: DateTimeIsoString;
  slug: Unique<UrlSlug>;
  tags?: List<TagKind>;
};
