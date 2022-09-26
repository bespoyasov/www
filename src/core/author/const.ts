import type { Author } from "./types";
import { site } from "@core/site";
import { translated } from "@translation";

export const author: Author = {
  name: translated.author.name,
  title: translated.author.title,
  site: site.baseUrl,
  email: "bespoyasov@me.com",

  employer: "https://0x.se/experts/alexander-bespoyasov",
  telegram: `https://telegram.me/bespoyasov`,
  twitter: `https://twitter.com/${translated.author.twitter}`,
  github: `https://github.com/bespoyasov`,
  linked: `https://www.linkedin.com/in/bespoyasov/`,

  donate: `https://buymeacoffee.com/bespoyasov`,
};
