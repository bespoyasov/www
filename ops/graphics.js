const { promises, existsSync: exists } = require("fs");
const { join } = require("path");
const { cpus } = require("os");

const { ImagePool } = require("@squoosh/lib");
const { writeFile } = promises;
const { filesIn } = require("./utils");

const poolSize = cpus().length / 2;
const imagePool = new ImagePool(poolSize);

const SOURCE_EXTENSIONS = ["jpg", "png"];
const TARGET_EXTENSIONS = ["webp", "avif"];
const ENCODE_OPTIONS = {
  webp: {},
  avif: {},
};

const WORKING_DIRECTORY = process.cwd();
const IMAGE_DIRECTORY = join(WORKING_DIRECTORY, "public/images");

function withExtension(extension, filename) {
  const base = filename.slice(0, filename.lastIndexOf("."));
  return `${base}.${extension}`;
}

function isImage(filename) {
  return SOURCE_EXTENSIONS.some((e) => filename.endsWith(`.${e}`));
}

function hasOptimizedVersions(filename) {
  return TARGET_EXTENSIONS.map((extension) => withExtension(extension, filename))
    .map((filename) => exists(filename))
    .reduce((result, exists) => result && exists, true);
}

async function imagesToConvert() {
  const files = await filesIn(IMAGE_DIRECTORY);
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
  console.log("Images converted.");
})();
