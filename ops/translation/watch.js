const { watch } = require("fs").promises;
const { sourceDirectory } = require("./config");
const { isTranslationFile } = require("./sources");

async function setupWatcherOn(callback) {
  const [shouldWatch] = process.argv.slice(2);
  if (!shouldWatch) return;

  console.log("Watching for translation changes...");

  for await (const { filename } of watch(sourceDirectory, { recursive: true })) {
    if (!isTranslationFile(filename)) continue;
    await callback(filename);
  }
}

module.exports = {
  setupWatcherOn,
};
