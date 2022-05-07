import type { SupportOption } from "./types";

import { author } from "@core/author";
import { mailto } from "@utils/mailto";
import { translated } from "@translation";

export const options: List<SupportOption> = [
  {
    link: mailto(author.email),
    text: translated.supportOptions.email,
    icon: "💌",
  },
  {
    link: "/rss.xml",
    text: translated.supportOptions.subscribe,
    icon: "📢",
  },
  {
    link: author.twitter,
    text: translated.supportOptions.follow,
    icon: "🐦",
  },
  {
    link: author.donate,
    text: translated.supportOptions.donate,
    icon: "☕️",
  },
];
