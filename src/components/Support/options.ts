type OptionLink = AbsoluteUrl | UrlSlug;
type Description = string;
type EmojiIcon = string;

type SupportOption = {
  link: OptionLink;
  text: Description;
  icon: EmojiIcon;
};

export const options: List<SupportOption> = [
  {
    link: "mailto:bespoyasov@me.com",
    text: "Написать письмо",
    icon: "💌",
  },
  {
    link: "/rss.xml",
    text: "Подписаться в RSS",
    icon: "📢",
  },
  {
    link: "https://twitter.com/bespoyasov",
    text: "Подписаться в Твитере",
    icon: "🐦",
  },
  {
    link: "https://www.buymeacoffee.com/bespoyasov",
    text: "Задонатить на кофе",
    icon: "☕️",
  },
];
