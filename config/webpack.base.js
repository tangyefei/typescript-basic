const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path:path.join(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [{
      test: /\.ts$/, 
      use: 'ts-loader',
      exclude: '/node_modules'
    }]
  }
}