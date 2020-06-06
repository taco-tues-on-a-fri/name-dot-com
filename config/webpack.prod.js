const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    // Extract CSS into separate files
    // Style-loader is for development & MiniCssExtractPlugin is for production
    // Cannot be used together in the same config
    new MiniCssExtractPlugin({
      // filename: 'styles/[name].[contenthash].css',
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       importLoaders: 1,
        //     },
        //   }
        // ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: 'single',
    // Breaks apart commonly shared deps (react, semantic ui, etc) into one shared bundle. React, etc
    // won't change as often as the app code, so this chunk can be cached separately from app code.
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})