import { ImageFileSource, ImageExtension } from "@domain/image";
import { Metadata } from "@domain/metadata";

type PathComponents = List<UrlSlug | ImageExtension>;

export function imageSourceFor({ slug }: Metadata, extension: ImageExtension): ImageFileSource {
  const directory: PathComponents = ["/img", slug];
  const filename: PathComponents = ["/cover", `.${extension}`];
  return [...directory, ...filename].join("");
}
