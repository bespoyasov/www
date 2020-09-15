import { imageExtensions } from "@domain/image";
import { RelativePath } from "@shared/types";

type WebpImagePath = RelativePath;

export function withWebp(source: RelativePath): WebpImagePath {
  const anyExtension = new RegExp(imageExtensions.join("|"), "i");
  const webp = imageExtensions[2];
  return source.replace(anyExtension, webp);
}
