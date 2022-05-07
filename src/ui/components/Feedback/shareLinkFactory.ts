import type { Metadata } from "@core/metadata";
import { absoluteUrlFor } from "@core/site";
import { FACEBOOK_TEMPLATE, TWITTER_TEMPLATE } from "./const";

type LinkTemplate = AbsoluteUrl;

export function createLinkFactory(template: LinkTemplate) {
  return function createLink({ slug, title }: Metadata): AbsoluteUrl {
    const url = absoluteUrlFor(slug);
    return template.replace("{URL}", url).replace("{TITLE}", title);
  };
}

export const twitterLink = createLinkFactory(TWITTER_TEMPLATE);
export const facebookLink = createLinkFactory(FACEBOOK_TEMPLATE);
