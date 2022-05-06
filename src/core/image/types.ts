export type ImageDescription = string;
export type ImageFileSource = RelativePath;
export type ImageExtension = typeof imageExtensions[number];

export const imageExtensions = ["png", "jpg", "webp", "avif"] as const;
