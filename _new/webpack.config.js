const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack/parts');
const vendorRegistry = require('./webpack/vendorRegistry');

const PATHS = {
  src: path.join(__dirname),
  dist: path.join(__dirname, 'dist'),
  globalStyles: path.join(__dirname, 'src', 'style')
};

const config = {
  entry: {
    app: './src/index.js',
    vendor: vendorRegistry
  },

  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js'
  }
};

function makeConfig() {
  switch(process.env.npm_lifecycle_event) {
    // PRODUCTION
    case 'build':
      return merge(
        config,
        parts.babel(PATHS.src),
        parts.commonsChunk(),
        parts.htmlPlugin(),
        parts.definePlugin(true),
        parts.resolve(),
        parts.sourceMap(true),
        parts.fonts(),
        parts.css(PATHS.src, PATHS.globalStyles)
      );

    // DEVELOPMENT
    default:
      return merge(
        config,
        parts.babel(PATHS.src),
        parts.commonsChunk(),
        parts.htmlPlugin(),
        parts.definePlugin(false),
        parts.resolve(),
        parts.sourceMap(false),
        parts.fonts(),
        parts.css(PATHS.src, PATHS.globalStyles),
        parts.devServer()
      );
  }
}

module.exports = makeConfig();
