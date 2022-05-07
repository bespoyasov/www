const { readFile } = require("fs").promises;
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const WORKING_DIR = process.cwd();
const BLOG_POST = path.join(WORKING_DIR, "out/blog/clean-architecture-on-frontend/index.html");
const PROJECT = path.join(WORKING_DIR, "out/projects/tzlvt/index.html");

async function fromFile(path) {
  const contents = await readFile(path);
  return new JSDOM(contents);
}

async function testContent(type, path) {
  const jsdom = await fromFile(path);
  const html = jsdom.window.document;

  if (!html.querySelector("main")) {
    throw new Error(`Smoke test failed: no content found in ${type}.`);
  }
}

(async () => {
  await testContent("blog post", BLOG_POST);
  await testContent("project", PROJECT);
  console.log("Smoke tests passed.");
})();
