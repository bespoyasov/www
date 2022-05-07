const { join } = require("path");
const { rm: remove, lstat } = require("fs/promises");
const { filesIn, directoriesIn } = require("./utils");

const BUILD_DIR = join(process.cwd(), "out");

const localeOptions = ["en", "ru"];
const currentLocale = process.env.locale ?? "en";

function isLocalized(directory) {
  return localeOptions.some((suffix) => directory.endsWith(suffix));
}

async function localizedDirectoriesIn(source) {
  const directories = await directoriesIn(source);
  return directories.filter(isLocalized);
}

async function cleanupEmpty(workingDirectory) {
  const stat = await lstat(workingDirectory);
  if (!stat.isDirectory()) return;

  const entries = await filesIn(workingDirectory);
  if (entries.length <= 0) await remove(workingDirectory, { recursive: true });
  else await Promise.all(entries.map((entry) => cleanupEmpty(entry)));
}

async function removeUnusedLocales(workingDirectory) {
  for (const directory of await localizedDirectoriesIn(workingDirectory)) {
    if (!directory.endsWith(currentLocale)) {
      await remove(directory, { recursive: true });
    }
  }
}

(async () => {
  await removeUnusedLocales(BUILD_DIR);
  await cleanupEmpty(BUILD_DIR);
  console.log("Unused locale directories removed.");
})();
