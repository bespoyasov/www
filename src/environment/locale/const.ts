const defaultLocale: Locale = "en";
const processLocale: Locale = process.env.LOCALE as Locale;

export const currentLocale = processLocale ?? defaultLocale;
