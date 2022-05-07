import { site } from "./const";

function toRelative(path: UrlSlug): RelativePath {
  return path.startsWith("/") ? path.slice(1) : path;
}

export function absoluteUrlFor(path: UrlSlug): AbsoluteUrl {
  return `${site.baseUrl}/${toRelative(path)}`;
}
