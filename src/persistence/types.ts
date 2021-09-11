import fs from "fs";

export type SystemType = typeof fs;

export type QueryKind = "blog" | "projects";
export type FileExtension = "mdx" | "tsx";
export type FileName = string;
