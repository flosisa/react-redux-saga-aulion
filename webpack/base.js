"use strict";

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')], //babel-polyfill enables async/await in older browsers(and some other features)
  },

  output: {
    path: path.resolve(__dirname, '../express/www'),
    filename: 'assets/js/[name].[hash:4].js',
    chunkFilename: '[name].[hash:4].chunk.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      Redux: path.resolve(__dirname, '../src/redux'),
      Constants: path.resolve(__dirname, '../src/constants'),
      Assets: path.resolve(__dirname, '../src/assets'),
      Util: path.resolve(__dirname, '../src/util'),
      Lang: path.resolve(__dirname, '../src/lang/'),
      Api: path.resolve(__dirname, '../src/api/')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          //This plugin will allow you to pull in just the pieces of library you need, instead of the entire library to be loaded, without a separate import for each item. 
          //   query: {
          //     plugins: [
          //         [require('babel-plugin-transform-imports'), {
          //           "react-bootstrap": {
          //                 transform: "react-bootstrap/lib/${member}",
          //                 preventFullImport: true
          //             },
          //             "lodash": {
          //               "transform": "lodash/${member}",
          //               "preventFullImport": true
          //           }
          //         }]
          //     ]
          // },
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              //'@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-namespace-from',
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      // favicon: './public/favicon.ico',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/img', to: 'assets/img' },
      { from: 'src/assets/fonts', to: 'assets/fonts' }
    ])
  ]
};