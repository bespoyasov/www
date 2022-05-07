module.exports = [
  {
    type: "select",
    name: "locale",
    message: "Select the post language:",
    choices: ["en", "ru"],
  },
  {
    type: "input",
    name: "title",
    message: "Enter the post title:",
  },
  {
    type: "input",
    name: "slug",
    message: "Enter the post slug:",
  },
];
