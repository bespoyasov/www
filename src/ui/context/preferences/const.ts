import type { PreferredLanguageContext } from "./types";
import { DEFAULT_LANGUAGE } from "@core/preferences";
import { identity } from "@utils/identity";

export const initialLanguage = DEFAULT_LANGUAGE;
export const initial: PreferredLanguageContext = {
  language: initialLanguage,
  updateLanguage: identity,
};
