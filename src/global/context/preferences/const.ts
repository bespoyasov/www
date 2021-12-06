import type { PreferredLanguageContext } from "./types";
import { DEFAULT_PREFERRED } from "@domain/preferences";
import { identity } from "@shared/identity";

export const initialLanguage = DEFAULT_PREFERRED;
export const initial: PreferredLanguageContext = {
  language: initialLanguage,
  updateLanguage: identity,
};
