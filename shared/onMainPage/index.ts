type UrlSlug = string;

export function onMainPage(pathname: UrlSlug): boolean {
  return pathname === "/";
}
