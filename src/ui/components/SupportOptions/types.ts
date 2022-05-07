type OptionUrl = AbsoluteUrl | UrlSlug;
type Description = LocalizedString;
type EmojiIcon = string;

export type SupportOption = {
  url: OptionUrl;
  text: Description;
  icon: EmojiIcon;
};
