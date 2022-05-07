const { readFile } = require("fs").promises;
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const WORKING_DIR = process.cwd();
const BLOG_POST = path.join(WORKING_DIR, "out/blog/about-new-request-site/index.html");
const PROJECT = path.join(WORKING_DIR, "out/projects/mrkt/index.html");

async function fromFile(path) {
  const contents = await readFile(path);
  return new JSDOM(contents);
}

async function testContent(type, path) {
  const jsdom = await fromFile(path);
  const html = jsdom.window.document;

  if (!html.querySelector("h1")) {
    throw new Error(`Smoke test failed: no content found in ${type}.`);
  }

  if (html.querySelectorAll("h1").length > 1) {
    throw new Error(`Smoke test failed: found more headers than expected in ${type}.`);
  }
}

(async () => {
  await testContent("blog post", BLOG_POST);
  await testContent("project", PROJECT);
  console.log("Smoke tests passed.");
})();
