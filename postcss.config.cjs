module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-sort-media-queries")(),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
    }),
  ],
};
