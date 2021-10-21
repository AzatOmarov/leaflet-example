const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const MODE = process.env.MODE || 'sandbox';

const sourcePath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'devops', 'html');
const publicPath = '/';

module.exports = {
  devtool: NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : false,
  mode: NODE_ENV,
  context: sourcePath,
  entry: {
    App: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: buildPath,
    publicPath: publicPath,
    filename: '[name]_[contenthash].js',
    chunkFilename: '[name]_[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Containers: path.resolve(__dirname, './src/containers'),
      Components: path.resolve(__dirname, './src/components'),
      Constants: path.resolve(__dirname, './src/constants'),
      Styles: path.resolve(__dirname, './src/styles'),
      Config: path.resolve(__dirname, './src/config')
    }
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)/,
        use: [
          {
            loader: 'style-loader'
          },
          'css-loader',
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: NODE_ENV === 'development'
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'Relog App',
      inject: 'body',
      hash: true,
      cache: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        MODE: JSON.stringify(MODE)
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'public'),
          to: buildPath + '/public',
          toType: 'dir'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].css',
      chunkFilename: 'public/css/[id].css',
      ignoreOrder: false
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },

  devServer: {
    inline: false,
    contentBase: path.join(__dirname, 'public'),
    publicPath: publicPath,
    disableHostCheck: true,
    historyApiFallback: true,
    port: 9000
  }
};
