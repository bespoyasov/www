import { Metadata } from "@domain/metadata";
import { facebookLink, twitterLink } from "./shareLinkFactory";

type ShareLink = {
  label: string;
  url: AbsoluteUrl;
};

export function createLinksList(metadata: Metadata): List<ShareLink> {
  return [
    { label: "RSS", url: "/rss.xml" },
    { label: "Твитнуть", url: twitterLink(metadata) },
    { label: "Фейсбукнуть", url: facebookLink(metadata) },
  ];
}
