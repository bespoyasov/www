type OptionUrl = AbsoluteUrl | UrlSlug;
type Description = LocalizedString;
type EmojiIcon = string;

export type SupportOption = {
  link: OptionUrl;
  text: Description;
  icon: EmojiIcon;
};
