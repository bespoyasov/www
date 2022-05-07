import type { ImageFileSource } from "@core/image";

type Cover = ImageFileSource;
type Title = LocalizedString;
type Description = LocalizedString;

export type SummaryCard = {
  cover: Cover;
  title: Title;
  description: Description;
};
