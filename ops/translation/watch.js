const { watch } = require("fs").promises;
const { sourceDirectory } = require("./config");
const { isTranslationsFile } = require("./dictionary");

async function setupWatcherOn(callback) {
  const [shouldWatch] = process.argv.slice(2);
  if (!shouldWatch) return;

  console.log("Watching for translation changes...");

  for await (const { filename } of watch(sourceDirectory, { recursive: true })) {
    if (!isTranslationsFile(filename)) continue;
    await callback(filename);
  }
}

module.exports = {
  setupWatcherOn,
};
