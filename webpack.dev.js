const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    new DotenvPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.0'),
      PORT: JSON.stringify(process.env.PORT || '3000'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
