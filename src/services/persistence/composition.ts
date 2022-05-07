import system from "fs";
import { currentLocale as locale } from "@env/locale";

export type Dependencies = {
  system?: typeof system;
  locale?: Locale;
};

export const dependencies: Dependencies = {
  system,
  locale,
};
