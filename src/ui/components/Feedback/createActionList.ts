import { Metadata } from "@domain/metadata";
import { facebookLink, twitterLink } from "./shareLinkFactory";

type ActionLink = {
  label: string;
  url: AbsoluteUrl | UrlSlug;
};

export function createActionList(metadata: Metadata): List<ActionLink> {
  return [
    { label: "Подписаться на RSS", url: "/rss.xml" },
    { label: "Твитнуть", url: twitterLink(metadata) },
    { label: "Фейсбукнуть", url: facebookLink(metadata) },
    { label: "Сказать спасибо", url: "/support" },
  ];
}
