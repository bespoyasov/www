import { currentLocale as locale } from "@env/locale";

export const HeadContents = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="author" href="/humans.txt" />
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />

      <link rel="icon" href="/icons/favicon.ico" />
      <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/icons/favicon-180x180.png" />
      <link rel="manifest" href={`/meta/${locale}/site.webmanifest`} />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
