import { UrlSlug } from "@shared/types";

export function onMainPage(pathname: UrlSlug): boolean {
  return pathname === "/";
}
