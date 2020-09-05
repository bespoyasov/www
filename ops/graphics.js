/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const { promises, existsSync: exists } = require("fs");
const { resolve, join } = require("path");
const { readdir } = promises;

const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

const EXTENSIONS = [".jpg", ".png"];
const ROOT_DIRECTORY = process.cwd();
const IMAGES_DIRECTORY = join(ROOT_DIRECTORY, "public/img");

function withWebp(source) {
  const imageExtension = new RegExp(EXTENSIONS.join("|"), "i");
  return source.replace(imageExtension, ".webp");
}

function directoryOf(filename) {
  return filename.slice(0, filename.lastIndexOf("/"));
}

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory() ? await filesIn(path) : path;
    }),
  );

  return files.flat();
}

async function imagesToConvert() {
  const files = await filesIn(IMAGES_DIRECTORY);
  return files.filter((filename) => {
    const isImage = EXTENSIONS.some((e) => filename.includes(e));
    const hasWebp = exists(withWebp(filename));
    return isImage && !hasWebp;
  });
}

async function convert(image) {
  await imagemin([image], {
    destination: directoryOf(image),
    plugins: [imageminWebp()],
  });
}

(async () => {
  for (const image of await imagesToConvert()) {
    await convert(image);
  }
})();
