import { UrlSlug, List } from "@shared/types";
import { Metadata } from "@domain/metadata";
import { ImageSource, ImageExtension } from "@domain/image";

type PathComponents = List<UrlSlug | ImageExtension>;

export function imageSourceFor({ slug }: Metadata, extension: ImageExtension): ImageSource {
  const directory: PathComponents = ["/img", slug];
  const filename: PathComponents = ["/cover", `.${extension}`];
  return [...directory, ...filename].join("");
}
