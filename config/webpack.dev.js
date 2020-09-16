const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8888,
    // open: true,
    hot: true
  }
  //   plugins: [
  //     new webpack.HotModuleReplacementPlugin()
  //   ]
});
