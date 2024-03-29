module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
