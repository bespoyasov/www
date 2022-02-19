import { Metadata } from "@domain/metadata";
import { facebookLink, twitterLink } from "./shareLinkFactory";

type ActionLink = {
  label: string;
  url: AbsoluteUrl | UrlSlug;
};

export function createLinksList(metadata: Metadata): List<ActionLink> {
  return [
    { label: "Подписаться на RSS", url: "/rss.xml" },
    { label: "Твитнуть", url: twitterLink(metadata) },
    { label: "Фейсбукнуть", url: facebookLink(metadata) },
    { label: "Поблагодарить", url: "/support" },
  ];
}
