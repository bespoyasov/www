import { RelativePath } from "@shared/types";

export type ImageSource = RelativePath;
export type ImageExtension = typeof imageExtensions[number];
export type ImageDescription = string;

export const imageExtensions = ["png", "jpg", "webp"] as const;
