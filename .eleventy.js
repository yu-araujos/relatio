const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  return {
    dir: {
      input: "src",
      output: path.resolve(__dirname, "public"),
    },
  };
};