const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

exports.definePlugin = function definePlugin(isProd) {
  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
        }
      })
    ]
  };
};

exports.commonsChunk = function commonsChunk() {
  return {
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ]
  };
};

exports.htmlPlugin = function htmlPlugin() {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  };
};

exports.babel = function babel(src) {
  return {
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          include: src
        }
      ]
    }
  };
};

exports.resolve = function() {
  return {
    resolve: {
      extensions: ['.js'],
      alias: {
        style: path.resolve(__dirname, '../src/style')
      }
    }
  };
};

exports.sourceMap = function sourceMap(isProd) {
  // Options: https://webpack.github.io/docs/configuration.html
  return {
    devtool: isProd ? 'source-map' : 'cheap-eval-source-map'
  };
};

exports.devServer = function devServer() {
  return {
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      port: 5050
    },
    stats: 'minimal'
  };
};

exports.fonts = function fonts() {
  return {
    module: {
      rules: [
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
      ]
    }
  };
};

exports.css = function css(srcPath, globalStylesPath) {
  return {
    module: {
      rules: [
        // CSS modules
        {
          test: /\.(sa|sc|c)ss?/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: getStyleLoaders(false)
          }),
          include: srcPath,
          exclude: globalStylesPath
        },

        // To generate global class names that aren't hashed by CSS modules
        {
          test: /\.(sa|sc|c)ss?/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: getStyleLoaders(true)
          }),
          include: globalStylesPath
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file (not sure if allChunks flag is necessary)
      new ExtractTextPlugin({ filename: 'main.css', allChunks: true })
    ]
  };
};

function getStyleLoaders(isGlobalStyles) {
  return [
    {
      loader: 'css-loader',
      options: isGlobalStyles ? {} : {
        sourceMap: true,
        modules: true,
        importLoaders: 2,
        camelCase: true,
        localIdentName: '[name]__[hash:base64:5]'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer()]
      }
    },
    {
      loader: 'sass-loader',
      options: isGlobalStyles ? {} : { sourceMap: true }
    }
  ];
}
