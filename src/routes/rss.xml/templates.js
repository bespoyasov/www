import { locale } from '../../lib/config';
import { site } from '../../lib/site';

const postTemplate = ({ metadata, content }) => `<item>
	<title><![CDATA[${metadata.title}]]></title>
	<link>${site.url}/blog/${metadata.slug}</link>
	<guid>${site.url}/blog/${metadata.slug}</guid>
	<pubDate>${new Date(metadata.datetime).toISOString()}</pubDate>
	<content:encoded><![CDATA[${content}]]></content:encoded>
</item>`;

export const feedTemplate = ({ posts }) =>
	`<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>${site.title}</title>
  <description>${site.description}</description>
  <link>${site.url}</link>

  <language>${locale}</language>
  <lastBuildDate>${new Date().toISOString()}</lastBuildDate>
  <docs>https://validator.w3.org/feed/docs/rss2.html</docs>

  ${posts.map(postTemplate).join('\n').trim()}
</channel>
</rss>
`.trim();
