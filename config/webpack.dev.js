const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const slash = require('slash');
const getLocalIp = require('./getLocalIp');
const host = getLocalIp();

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // 自定义css名称
                getLocalIdent: (context, localIdentName, localName) => {
                  const match = context.resourcePath.match(/src(.*)/);
                  if (match && match[1]) {
                    const antdProPath = match[1].replace('.less', '');
                    const arr = slash(antdProPath)
                      .split('/')
                      .map((a) => a.replace(/([A-Z])/g, '-$1'))
                      .map((a) => a.toLowerCase());
                    return `${'demo'}${arr.join('-')}-${localName}`.replace(/--/g, '-');
                  }
                  return localName;
                },
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  // 'primary-color': '#1DA57A',
                  // 'link-color': '#1DA57A',
                  // 'border-radius-base': '2px'
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host,
    port: 8888,
    // 热更新
    hot: true,
    // 浏览器控制台将显示消息  'none' | 'info' | 'error' | 'warning'
    clientLogLevel: 'error',
    historyApiFallback: true,
    stats: {
      // 添加资源信息
      assets: false,
      // 添加 chunk 和 chunk merge 来源的信息
      chunkOrigins: false,
      // 通过对应的 bundle 显示入口起点
      entrypoints: false,
      // 添加构建模块信息
      modules: false,
    },
    proxy: [
      // 直连后端打开注释
      {
        context: [`/api/**`],
        target: 'http://rest.apizza.net/mock/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
        cookieDomainRewrite: host,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()].filter(Boolean),
});
