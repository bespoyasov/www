import type { SupportOption } from "./types";

import { author } from "@core/author";
import { mailto } from "@utils/mailto";
import { translated } from "@translation";

export const options: List<SupportOption> = [
  {
    url: mailto(author.email),
    text: translated.supportOptions.email,
  },
  {
    url: "/rss.xml",
    text: translated.supportOptions.subscribe,
  },
  {
    url: author.twitter,
    text: translated.supportOptions.twitter,
  },
  {
    url: author.github,
    text: translated.supportOptions.github,
  },
  {
    url: author.donate,
    text: translated.supportOptions.donate,
  },
];
