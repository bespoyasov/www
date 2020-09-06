import { List } from "@shared/types";
import { NavRoute, RouteKind } from "./types";

export const internal: List<NavRoute<RouteKind.Internal>> = [
  { url: "/projects", title: "Проекты" },
  { url: "/blog", title: "Блог" },
  { url: "/tag/editorial", title: "Лучшее" },
];

export const external: List<NavRoute<RouteKind.External>> = [
  { url: "mailto:bespoyasov@me.com", title: "Почта" },
  { url: "https://t.me/bespoyasov", title: "Телеграм" },
];
