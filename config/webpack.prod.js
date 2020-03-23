
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({template: "./src/index.html"})
  ]
}