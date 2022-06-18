import fs from "fs";
import type { PlatformPath } from "path";

export type System = typeof fs;
export type PathResolver = PlatformPath;
