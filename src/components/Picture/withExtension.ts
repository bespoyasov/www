import { imageExtensions, ImageExtension, ImageFileSource } from "@domain/image";

type ConvertedImagePath = ImageFileSource;

export function withExtension(extension: ImageExtension) {
  return function covertPath(source: ImageFileSource): ConvertedImagePath {
    const anyExtension = new RegExp(imageExtensions.join("|"), "i");
    return source.replace(anyExtension, extension);
  };
}

export const withWebp = withExtension("webp");
export const withAvif = withExtension("avif");
