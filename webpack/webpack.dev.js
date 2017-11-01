const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common.config, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: common.paths.public,
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const injectReactHotLoader = () => {
  // Add react-hot-loader to entry point
  const entry = config.entry.main;

  config.entry.main = [
    ...entry.slice(0, entry.length - 1),
    'react-hot-loader/patch',
    entry[entry.length - 1],
  ];

  // Add react-hot-loader to babel loader
  config.module.rules[0].options = {
    plugins: ['react-hot-loader/babel'],
  };
};

injectReactHotLoader();

module.exports = config;
