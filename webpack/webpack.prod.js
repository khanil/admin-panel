const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const config = merge(common.config, {
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: './scripts/',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: common.paths.root,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

module.exports = config;
