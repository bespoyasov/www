import { Metadata } from "@domain/metadata";
import { absoluteUrlFor } from "@utils/absoluteUrl";
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
