import { List, Unique, DateTimeIsoString, UrlSlug, RelativePath } from "@shared/types";
import { TagKind } from "@domain/tags";

type Title = string;
type Description = string;
type PreviewImage = RelativePath;

export type Metadata = {
  title: Title;
  description: Description;
  datetime: DateTimeIsoString;
  slug: Unique<UrlSlug>;

  tags?: List<TagKind>;
  preview?: PreviewImage;
};
