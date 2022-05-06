const { filesIn } = require("../utils");
const { sourceDirectory, translationFileName } = require("./config");

function isTranslationFile(fileName) {
  return fileName.endsWith(translationFileName);
}

async function collectTranslations() {
  const filenames = await filesIn(sourceDirectory);
  const translations = filenames.filter(isTranslationFile);
  return translations;
}

module.exports = {
  isTranslationFile,
  collectTranslations,
};
