/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require("fs").promises;
const path = require("path");
const jsdom = require("jsdom");
const { Feed } = require("feed");
const { JSDOM } = jsdom;

const WORKING_DIR = process.cwd();
const SOURCE_PATH = path.join(WORKING_DIR, "out/rss/index.html");
const DESTINATION_PATH = path.join(WORKING_DIR, "out/rss.xml");

async function fromFile() {
  const contents = await readFile(SOURCE_PATH);
  return new JSDOM(contents);
}

async function saveAsFile(contents) {
  await writeFile(DESTINATION_PATH, contents, "utf-8");
}

async function generateRss() {
  const feedHtml = await fromFile();
  const feedRoot = feedHtml.window.document;

  const title = feedRoot.querySelector("title").textContent;
  const description = feedRoot.querySelector(`[name="description"]`).getAttribute("content");

  const posts = feedRoot.querySelectorAll("article");
  const updated = new Date(posts[0].dataset.datetime);

  const name = "Саша Беспоясов";
  const link = "https://bespoyasov.ru";

  const feed = new Feed({
    id: link,
    link,
    title,
    description,
    updated,
    author: { name, link },
    language: "ru",
  });

  for (const post of posts) {
    const { title, link, datetime: datetimeISO } = post.dataset;
    const date = new Date(datetimeISO);
    const content = post.innerHTML;

    feed.addItem({
      id: link,
      link,
      title,
      content,
      date,
    });
  }

  await saveAsFile(feed.rss2());
}

(async () => {
  await generateRss();
})();
