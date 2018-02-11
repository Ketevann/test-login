'use strict';

var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
    resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx', '.json', '*']
  },
    module: {
    rules: [{
      test: /jsx?$/,


        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }

    }]
  },
};
