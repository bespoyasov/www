import type { PreferredLanguageContext } from "./types";
import { DEFAULT_PREFERRED } from "@domain/preferences";
import { identity } from "@utils/identity";

export const initialLanguage = DEFAULT_PREFERRED;
export const initial: PreferredLanguageContext = {
  language: initialLanguage,
  updateLanguage: identity,
};
