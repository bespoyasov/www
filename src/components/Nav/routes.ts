import { NavRoute, RouteKind } from "./types";

export const internal: List<NavRoute<RouteKind.Internal>> = [
  { url: "/projects", title: "Проекты" },
  { url: "/blog", title: "Блог" },
  { url: "/talks", title: "Доклады" },
  { url: "/tag/favorite", title: "Лучшее" },
];

export const external: List<NavRoute<RouteKind.External>> = [
  { url: "https://twitter.com/bespoyasov", title: "Твиттер" },
  { url: "https://github.com/bespoyasov", title: "Гитхаб" },
];
