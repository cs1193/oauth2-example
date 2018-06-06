const path = require('path');
const webpack = require('webpack');

const PACKAGE = require('./package.json');

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) 2018, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

const configuration = {
  cache: true,
  mode: 'development',
  context: __dirname,
  entry: {
    lib: ["./source/index.js"]
  },
  devtool: "source-map",
  resolve: {
    enforceExtension: false,
    extensions: [".js"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/stage-0', {
              'decoratorsLegacy': true
            }],
            '@babel/es2017',
            '@babel/flow',
            '@babel/env',
          ],
          plugins: [
            '@babel/plugin-transform-flow-strip-types'
          ]
        }
      }]
    }, {
      test: /\.(json|geojson)$/,
      use: [{
        loader: 'json-loader'
      }]
    }, {
      test: /\.(key|crt|csr)$/,
      use: [{
        loader: 'raw-loader'
      }]
    }, {
      test: /\.(ejs)$/,
      use: [{
        loader: 'ejs-loader'
      }]
    }]
  },
  output: {
    pathinfo: true,
    filename: "[name].js",
    path: path.resolve('./build'),
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  target: 'node',
  externals: [
    /^(?!\.|\/).+/i,
  ]
};

module.exports = configuration;
