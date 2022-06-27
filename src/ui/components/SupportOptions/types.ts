type OptionUrl = AbsoluteUrl | UrlSlug;
type Description = LocalizedString;

export type SupportOption = {
  url: OptionUrl;
  text: Description;
};
