import { UrlSlug, AbsoluteUrl } from "@shared/types";

type Social = {
  url: AbsoluteUrl | UrlSlug;
  name: string;
};

export const socials: Social[] = [
  { url: "https://twitter.com/bespoyasov", name: "TW" },
  { url: "https://instagram.com/a.bespoyasov/", name: "IG" },
  { url: "https://github.com/bespoyasov", name: "GH" },
  { url: "/rss.xml", name: "RSS" },
];
