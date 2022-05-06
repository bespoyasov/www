const { join } = require("path");
const { readFile, writeFile } = require("fs/promises");

const { targetDirectory, registeredLocales, dictionaryFileName } = require("./config");
const { collectTranslations } = require("./sources");

function createEmptyDictionary() {
  return registeredLocales.reduce((result, locale) => ({ ...result, [locale]: {} }), {});
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
