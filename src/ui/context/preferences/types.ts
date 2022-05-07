import type { CodeSampleLanguage } from "@core/code";
import type { PreferredLanguage } from "@core/preferences";

export type PreferenceUpdater = (updated: CodeSampleLanguage) => void;
export type PreferredLanguageContext = {
  language: PreferredLanguage;
  updateLanguage: PreferenceUpdater;
};
