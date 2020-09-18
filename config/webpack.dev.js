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
    hot: true,
    stats: {
      // 添加资源信息
      assets: false,
      // 添加 chunk 和 chunk merge 来源的信息
      chunkOrigins: false,
      // 通过对应的 bundle 显示入口起点
      entrypoints: false,
      // 添加构建模块信息
      modules: false
    }
  }
  //   plugins: [
  //     new webpack.HotModuleReplacementPlugin()
  //   ]
});
