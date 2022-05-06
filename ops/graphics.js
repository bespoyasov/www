const { join } = require("path");
const { promises, existsSync: exists } = require("fs");
const { ImagePool } = require("@squoosh/lib");

const { filesIn } = require("./utils");
const { writeFile } = promises;
const imagePool = new ImagePool();

const SOURCE_EXTENSIONS = ["jpg", "png"];
const TARGET_EXTENSIONS = ["webp", "avif"];
const ENCODE_OPTIONS = {
  webp: {},
  avif: {},
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
