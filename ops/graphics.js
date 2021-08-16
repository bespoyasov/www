const { promises, existsSync: exists } = require("fs");
const { resolve, join } = require("path");
const { ImagePool } = require("@squoosh/lib");

const { readdir, writeFile } = promises;
const imagePool = new ImagePool();

const SOURCE_EXTENSIONS = ["jpg", "png"];
const TARGET_EXTENSIONS = ["webp"];
const ENCODE_OPTIONS = {
  webp: {},
};

const ROOT_DIRECTORY = process.cwd();
const IMAGES_DIRECTORY = join(ROOT_DIRECTORY, "public/img");

function withExtension(extension, filename) {
  const base = filename.slice(0, filename.lastIndexOf("."));
  return `${base}.${extension}`;
}

function isImage(filename) {
  return SOURCE_EXTENSIONS.some((e) => filename.includes(`.${e}`));
}

function hasOptimizedVersions(filename) {
  return TARGET_EXTENSIONS.map((extension) => withExtension(extension, filename))
    .map((filename) => exists(filename))
    .reduce((result, exists) => result && exists, true);
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
    return isImage(filename) && !hasOptimizedVersions(filename);
  });
}

async function saveConverted(image, filename) {
  for (const extension of TARGET_EXTENSIONS) {
    const { binary } = await image.encodedWith[extension];
    const converted = withExtension(extension, filename);
    await writeFile(converted, binary);
  }
}

async function convert(filename) {
  const image = imagePool.ingestImage(filename);
  await image.encode(ENCODE_OPTIONS);
  await saveConverted(image, filename);
}

(async () => {
  for (const image of await imagesToConvert()) {
    await convert(image);
  }

  await imagePool.close();
})();
