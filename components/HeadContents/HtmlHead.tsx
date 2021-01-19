import React from "react";

export const HeadContents = () => {
  return (
    <>
      <meta charSet="utf-8" />

      <link rel="author" href="/humans.txt" />
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/meta/favicon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/meta/favicon-180x180.png" />
      <link rel="manifest" href="/meta/site.webmanifest" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link
        href="https://fonts.googleapis.com/css?family=PT+Mono%7CPT+Sans:400,400i,700%7C&amp;subset=cyrillic-ext&amp;display=swap"
        rel="stylesheet"
      />
    </>
  );
};
