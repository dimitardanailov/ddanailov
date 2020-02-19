const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  ASSETS,
  CONFIG,
  SOURCE_DIR,
  DIST_DIR,
  STATIC_DIR,
} = require('../utils/folders')

require('dotenv').config()

module.exports = {
  stats: 'minimal',
  entry: `/${SOURCE_DIR}/app.js`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: optimization(),
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      assets: `${ASSETS}/assets`,
      i18n: `${CONFIG}/config/i18n`,
    },
  },
  plugins: plugins(),
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: '[name].bundle.js',
  },
}

function isProd() {
  if (process.env.NODE_ENV === 'production') return true

  return false
}

function optimization() {
  let minimizer = []
  let minimize = false
  if (isProd()) {
    minimizer = minimizeSettings()
    minimize = true
  }

  const setup = {
    minimizer,
    minimize,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  }

  return setup
}

function minimizeSettings() {
  const minimizer = [
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ]

  return minimizer
}

function plugins() {
  if (isProd()) {
    return prodPluggins()
  } else {
    return devPlugins()
  }
}

function devPlugins() {
  const plugins = [
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: `${STATIC_DIR}/index.html`,
    }),
  ]

  return plugins
}

function prodPluggins() {
  const plugins = [
    new webpack.SourceMapDevToolPlugin(sourceMapsConfigurations()),
  ]

  return plugins
}

function sourceMapsConfigurations() {
  const url = `${process.env.S3_OBJECT_URL}/[url]`
  const configurations = {
    append: `\n//# sourceMappingURL=${url}`,
    filename: '[name].bundle.js.map',
  }

  return configurations
}
