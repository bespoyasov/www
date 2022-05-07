const { join, resolve } = require("path");
const { readdir } = require("fs/promises");

async function directoriesIn(source) {
  const entries = await readdir(source, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((directory) => join(source, directory.name));

  const subdirectories = await Promise.all(directories.map(directoriesIn));
  return [...directories, ...subdirectories].flat();
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

module.exports = {
  directoriesIn,
  filesIn,
};
