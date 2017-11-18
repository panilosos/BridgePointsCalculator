const path = require("path");
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./js/project.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "out.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    compress: true,
    open: true,
    port: 9000
  },
  stats: {
    colors: true
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ //ten plug in powoduje odświeżanie strony na serverze;
  //     // minify: {
  //     //   collapseWhitespace: true
  //     // },
  //     filename: 'index.html',
  //     template: './index.html'
  //   })
  // ]
};
