'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const fs = require('fs')
const path = require('path');
const baseConfig = require('./base');

const HOST = process.env.DEV_WEB_SERVER_HOST || 'localhost'
const PORT = process.env.DEV_WEB_SERVER_PORT || 7111
const DEFAULT_BROWSER = process.env.DEFAULT_BROWSER || 'google-chrome'
const API_SERVER_HOST = process.env.API_SERVER_HOST || 'localhost'
const API_SERVER_PORT = process.env.API_SERVER_PORT || 7112

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, '../src/util/ssl/server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, '../src/util/ssl/server.crt')),
    //   // ca: fs.readFileSync('/path/to/ca.pem'),
    // },
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: DEFAULT_BROWSER,
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    },
    proxy: {
      '/api': {
        target: `http://${API_SERVER_HOST}:${API_SERVER_PORT}`,
        secure: false
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
