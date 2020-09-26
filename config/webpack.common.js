const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const slash = require('slash');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    // 添加 chunkFilename
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
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
                      .map(a => a.replace(/([A-Z])/g, '-$1'))
                      .map(a => a.toLowerCase());
                    return `${'demo'}${arr.join('-')}-${localName}`.replace(/--/g, '-');
                  }
                  return localName;
                }
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      favicon: 'public/favicon.ico',
      template: 'public/index.html'
    })
  ]
};
