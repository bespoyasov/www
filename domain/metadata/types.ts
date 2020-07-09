import { List, DateTimeIsoString } from "@shared/types";
import { Tags } from "@domain/tags/types";

type Title = string;
type Description = string;

export type Metadata = {
  title: Title;
  description: Description;
  datetime: DateTimeIsoString;
  tags: List<Tags>;
};
