import path, { PlatformPath } from "path";
import { currentLocale as locale } from "@env/locale";

export type Dependencies = {
  path?: PlatformPath;
  locale?: Locale;
};

export const defaultDependencies: Dependencies = {
  path,
  locale,
};
