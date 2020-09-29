const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const slash = require('slash');
// 清除文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 打包css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
                      .map(a => a.replace(/([A-Z])/g, '-$1'))
                      .map(a => a.toLowerCase());
                    return `${'demo'}${arr.join('-')}-${localName}`.replace(/--/g, '-');
                  }
                  return localName;
                }
              }
            }
          },
          {
            loader: 'postcss-loader'
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
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  // 代码分割
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: { chunks: 'all' }
  }
});
