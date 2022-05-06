const { composeDictionary, saveDictionary } = require("./dictionary");
const { createTypings, saveTypings } = require("./typings");
const { setupWatcherOn } = require("./watch");

async function updateTranslations() {
  const dictionary = await composeDictionary();
  await saveDictionary(dictionary);

  const typings = createTypings(dictionary);
  await saveTypings(typings);

  console.log(`Dictionary updated.`);
}

(async () => {
  await updateTranslations();
  await setupWatcherOn(updateTranslations);
})();
