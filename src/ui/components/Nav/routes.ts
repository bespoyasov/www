import type { NavRoute } from "./types";
import { translated } from "@translation";

export const routes: List<NavRoute> = [
  {
    url: "/projects",
    title: translated.nav.projects,
  },
  {
    url: "/blog",
    title: translated.nav.blog,
  },
  {
    url: "/talks",
    title: translated.nav.talks,
  },
  {
    url: "/tag/favorite",
    title: translated.nav.favorite,
  },
];
