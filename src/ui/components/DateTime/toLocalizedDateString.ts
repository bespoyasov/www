import { currentLocale } from "@env/locale";

export function toLocalizedDateString(
  datetime: DateTimeIsoString,
  locale: Locale = currentLocale,
): LocalizedDateString {
  return new Date(datetime).toLocaleString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
