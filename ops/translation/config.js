const { join } = require("path");

const workingDirectory = process.cwd();

exports.sourceDirectory = join(workingDirectory, "src");
exports.targetDirectory = join(workingDirectory, "src/shared/translation");

exports.registeredLocales = ["en", "ru"];

exports.translationFileName = "translations.json";
exports.dictionaryFileName = "dictionary.json";
exports.typingsFileName = "dictionary.d.ts";
