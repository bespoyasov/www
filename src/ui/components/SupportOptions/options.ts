import type { SupportOption } from "./types";

import { author } from "@core/author";
import { mailto } from "@utils/mailto";
import { translated } from "@translation";

export const options: List<SupportOption> = [
  {
    url: mailto(author.email),
    text: translated.supportOptions.email,
    icon: "💌",
  },
  {
    url: "/rss.xml",
    text: translated.supportOptions.subscribe,
    icon: "📢",
  },
  {
    url: author.twitter,
    text: translated.supportOptions.follow,
    icon: "🐦",
  },
  {
    url: author.donate,
    text: translated.supportOptions.donate,
    icon: "☕️",
  },
];
