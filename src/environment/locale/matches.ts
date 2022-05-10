import { currentLocale } from "./const";

export function matchesCurrent(locale: Locale) {
  return locale === currentLocale;
}
