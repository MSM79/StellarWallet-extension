const webpack = require('webpack');
const process = require('process');
const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('./manifestPlugin');

const devMode = process.env.NODE_ENV !== 'production';
const isDesktop = process.env.PURPOSE === 'desktop';

const plugins = [
  new webpack.DefinePlugin({
    'process.env.isDesktop': isDesktop,
  }),
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
  new HtmlWebpackPlugin({
    chunks: ['popup'],
    template: `${resolve(__dirname, 'src', 'popup')}/popup.html`,
    filename: `${resolve(`${__dirname}/dist`)}/popup.html`,
  }),

  // new ManifestPlugin(),
];

const optimization = {
  minimizer: [
    new HtmlMinimizerPlugin(),
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        format: {
          comments: false,
        },
      },
    }),
    new CssMinimizerPlugin(),
  ],
};

const fallback = {
  crypto: require.resolve('crypto-browserify'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
};

const entry = {
  popup: resolve(`${__dirname}/src/popup/index.tsx`),
};

if (isDesktop) {
  entry.electron = resolve(`${__dirname}/src/electron.js`);
}

// if (!isDesktop) {
//   optimization.splitChunks = {
//     chunks: 'all',
//   };
// }

if (!devMode) {
  plugins.push(new MiniCssExtractPlugin());
}

const config = {
  entry,
  output: {
    filename: '[name].js',
    path: resolve(`${__dirname}/dist`),
  },
  optimization,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins() {
                  return [autoprefixer];
                },
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins,
  resolve: {
    fallback,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      src: resolve(__dirname, 'src'),
      popup: resolve(__dirname, 'src', 'popup'),
      helpers: resolve(__dirname, 'src', 'helpers'),
      assets: resolve(__dirname, 'src', 'assets'),
      background_script_bundle: devMode
        ? 'dist/vendors-node_modules_aes256_index_js-node_modules_babel-polyfill_lib_index_js-node_modules_st-aa6ffa.js'
        : 'dist/686.js',
    },
  },
  watch: devMode,
  target: isDesktop ? 'electron-renderer' : 'web',
};

if (devMode) {
  config.devtool = 'source-map';
}

module.exports = config;
