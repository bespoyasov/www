import type { Metadata } from "@core/metadata";
import { translated } from "@translation";
import { facebookLink, twitterLink } from "./shareLinkFactory";

type ActionLink = {
  label: string;
  url: AbsoluteUrl | UrlSlug;
};

export function createActionList(metadata: Metadata): List<ActionLink> {
  return [
    { label: translated.feedback.subscribe, url: "/rss.xml" },
    { label: translated.feedback.tweet, url: twitterLink(metadata) },
    { label: translated.feedback.share, url: facebookLink(metadata) },
    { label: translated.feedback.support, url: "/support" },
  ];
}
