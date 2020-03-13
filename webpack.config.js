const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundler.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      {
        test: /\.(jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};
