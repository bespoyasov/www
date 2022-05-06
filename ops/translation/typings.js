const { join } = require("path");
const { writeFile } = require("fs/promises");

const { targetDirectory, typingsFileName } = require("./config");

function valuesToTypes(dictionary) {
  Object.entries(dictionary).forEach(([key, value]) => {
    if (typeof value === "object") valuesToTypes(dictionary[key]);
    else dictionary[key] = typeof value;
  });

  return dictionary;
}

function createTypings(dictionary) {
  const converted = valuesToTypes(dictionary);
  const stringified = JSON.stringify(converted, null, 2);
  const definition = stringified.replaceAll(/['"]/g, "");
  return `type Dictionary = ${definition}`;
}

async function saveTypings(typings) {
  const filePath = join(targetDirectory, typingsFileName);
  await writeFile(filePath, typings);
}

module.exports = {
  createTypings,
  saveTypings,
};
