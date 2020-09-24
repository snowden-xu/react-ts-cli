const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const getLocalIp = require('./getLocalIp');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: getLocalIp(),
    port: 8888,
    // 热更新
    hot: true,
    // 浏览器控制台将显示消息  'none' | 'info' | 'error' | 'warning'
    clientLogLevel: 'error',
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
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()].filter(Boolean)
});
