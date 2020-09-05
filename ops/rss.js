/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require("fs").promises;
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function fromTemplate({ title, description, lastBuildDate, channel }) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
      <title>${title}</title>
      <link>https://bespoyasov.ru/rss.xml</link>
      <description>${description}</description>
      <language>ru-ru</language>
      <lastBuildDate>${lastBuildDate}</lastBuildDate>
      <copyright>Саша Беспоясов</copyright>

      ${channel}
    </channel>
  </rss>`;
}

function fromPostTemplate({ title, link, datetime, description }) {
  return `<item>
    <title>${title}</title>
    <link>${link}</link>
    <pubDate>${datetime}</pubDate>
    <guid>${link}</guid>
    <description>
      <![CDATA[ ${description} ]]>
    </description>
  </item>`;
}

const WORKING_DIR = process.cwd();
const SOURCE_PATH = path.join(WORKING_DIR, "out/rss/index.html");
const DESTINATION_PATH = path.join(WORKING_DIR, "out/rss.xml");

async function fromFile() {
  const contents = await readFile(SOURCE_PATH);
  return new JSDOM(contents);
}

async function saveAsFile(contents) {
  await writeFile(DESTINATION_PATH, contents);
}

async function generateRss() {
  const feedHtml = await fromFile();
  const feed = feedHtml.window.document;
  const title = feed.querySelector("title").textContent;
  const description = feed.querySelector(`[name="description"]`).getAttribute("content");

  const posts = feed.querySelectorAll("article");
  const lastBuildDate = posts[0].dataset.datetime;

  let channel = "";

  for (const post of posts) {
    const { title, link, datetime } = post.dataset;
    const description = post.innerHTML;
    channel += fromPostTemplate({ title, link, datetime, description });
  }

  const rssXml = fromTemplate({ title, description, lastBuildDate, channel });
  await saveAsFile(rssXml);
}

(async () => {
  await generateRss();
})();
