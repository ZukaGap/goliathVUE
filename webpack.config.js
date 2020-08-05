module.exports = {
  module: {
    rules: [
      // ... other rules omitted
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              data: `@import "@/scss/_variables.scss";`,
            },
          },
        ],
      },
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // plugin omitted
};
