import type { DomainZone } from "./types";
import { currentLocale } from "@env/locale";

const domainCollection: Dict<Locale, DomainZone> = {
  en: "me",
  ru: "ru",
};

export const domain = domainCollection[currentLocale];
