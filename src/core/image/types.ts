export type ImageDescription = string;
export type ImageFileSource = RelativePath;
export type ImageExtension = "png" | "jpg" | "webp" | "avif";

export const imageExtensions = ["png", "jpg", "webp", "avif"] as const;
