/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  tailwindConfig: __dirname + "/tailwind.config.cjs",
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
