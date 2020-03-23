const baseConfig = require('./webpack.base.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const merge = require('webpack-merge');
const envConfig = process.NODE_ENV == 'development' ? devConfig : prodConfig;

module.exports = merge(baseConfig, envConfig)