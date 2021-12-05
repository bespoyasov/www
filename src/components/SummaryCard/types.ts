import type { ImageFileSource } from "@domain/image";

type Title = string;
type Description = string;
type Cover = ImageFileSource;

export type SummaryCard = {
  title: Title;
  cover: Cover;
  description: Description;
};
