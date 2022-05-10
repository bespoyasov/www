type LanguageLink = {
  url: AbsoluteUrl;
  locale: Locale;
};

export const languages: List<LanguageLink> = [
  { url: "https://bespoyasov.me", locale: "en" },
  { url: "https://bespoyasov.ru", locale: "ru" },
];
