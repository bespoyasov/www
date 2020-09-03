import { RelativePath } from "@shared/types";

export type ImageSource = RelativePath;
export type ImageExtension = typeof imageExtensions[number];

export const imageExtensions = ["png", "jpg"] as const;
