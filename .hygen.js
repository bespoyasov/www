module.exports = {
  templates: `${__dirname}/ops/_templates`,
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => __dirname,
  },
};
