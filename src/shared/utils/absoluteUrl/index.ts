export function absoluteUrlFor(slug: UrlSlug): AbsoluteUrl {
  const BASE_URL = "https://bespoyasov.ru";
  return BASE_URL + slug;
}
