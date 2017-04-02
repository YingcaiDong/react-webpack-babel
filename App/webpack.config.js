var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  devServer: {
    open: true,
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /.\js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /.\jsx$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
