import type { CodeSamplesLanguage, PreferredLanguage } from "@domain/preferences";

export type PreferenceUpdater = (updated: CodeSamplesLanguage) => void;
export type PreferredLanguageContext = {
  language: PreferredLanguage;
  update: PreferenceUpdater;
};
