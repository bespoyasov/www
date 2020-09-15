import { imageExtensions, ImageSource } from "@domain/image";

type WebpImagePath = ImageSource;

export function withWebp(source: ImageSource): WebpImagePath {
  const anyExtension = new RegExp(imageExtensions.join("|"), "i");
  const webp = imageExtensions[2];
  return source.replace(anyExtension, webp);
}
