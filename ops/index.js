/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const { imagesToConvert, convert } = require("./graphics");

(async () => {
  for (const image of await imagesToConvert()) {
    await convert(image);
  }
})();
