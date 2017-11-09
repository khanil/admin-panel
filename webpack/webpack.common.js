const path = require('path');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const PUBLIC_PATH = path.join(ROOT_PATH, 'public');

const config = {
  entry: {
    main: ['babel-polyfill', path.join(SRC_PATH, 'index.jsx')],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'babel-polyfill',
      'prop-types',
    ],
  },
  output: {
    path: path.join(PUBLIC_PATH, 'scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, 'views/index.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: PUBLIC_PATH,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],
};

module.exports = {
  config,
  paths: {
    root: ROOT_PATH,
    src: SRC_PATH,
    public: PUBLIC_PATH,
  },
};
