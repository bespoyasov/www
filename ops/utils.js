const { resolve } = require("path");
const { readdir } = require("fs/promises");

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
  filesIn,
};
