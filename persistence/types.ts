import fs from "fs";
import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@persistence/const";

export type SystemType = typeof fs;

export type FileExtension = "mdx" | "tsx";
export type FileName = string;

export type QueryKind = typeof PROJECTS_DIRECTORY | typeof BLOG_DIRECTORY;
