const { join } = require("path");
const { readFile, writeFile } = require("fs/promises");
const { filesIn } = require("../utils");

const {
  sourceDirectory,
  targetDirectory,
  registeredLocales,
  translationFileName,
  dictionaryFileName,
} = require("./config");

function createEmptyDictionary() {
  return registeredLocales.reduce((result, locale) => ({ ...result, [locale]: {} }), {});
}

function isTranslationsFile(fileName) {
  return fileName.endsWith(translationFileName);
}

async function collectTranslations() {
  const filenames = await filesIn(sourceDirectory);
  const translations = filenames.filter(isTranslationsFile);
  return translations;
}

async function composeDictionary() {
  const dictionary = createEmptyDictionary();
  const translations = await collectTranslations();

  for (const translationPath of translations) {
    const contents = await readFile(translationPath, { encoding: "utf-8" });
    if (!contents) continue;

    const source = JSON.parse(contents);
    const prefix = source.prefix;

    for (const locale of registeredLocales) {
      dictionary[locale][prefix] = source[locale];
    }
  }

  return dictionary;
}

async function saveDictionary(dictionary) {
  const filePath = join(targetDirectory, dictionaryFileName);
  const content = JSON.stringify(dictionary);
  await writeFile(filePath, content);
}

module.exports = {
  composeDictionary,
  saveDictionary,
};
