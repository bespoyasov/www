import { imageExtensions, ImageFileSource } from "@domain/image";

type WebpImagePath = ImageFileSource;

export function withWebp(source: ImageFileSource): WebpImagePath {
  const anyExtension = new RegExp(imageExtensions.join("|"), "i");
  const webp = imageExtensions[2];
  return source.replace(anyExtension, webp);
}
