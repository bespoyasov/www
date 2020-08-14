import React from "react";

export const HeadContents: React.FC = () => {
  return (
    <>
      <meta charSet="utf-8" />

      <link rel="author" href="/humans.txt" />
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />

      <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link rel="mask-icon" href="/meta/safari-pinned-tab.svg" color="#333333" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/meta/mstile-144x144.png" />
      <meta name="msapplication-config" content="/meta/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <link
        href="https://fonts.googleapis.com/css?family=PT+Mono%7CPT+Sans:400,400i,700%7C&amp;subset=cyrillic-ext&amp;display=swap"
        rel="stylesheet"
      />
    </>
  );
};
