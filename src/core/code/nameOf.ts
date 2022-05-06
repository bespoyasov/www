import type { LanguageKind, LanguageName } from "./types";
import { languages as collection } from "./const";

export function nameOf(language: LanguageKind): LanguageName {
  return collection[language];
}
