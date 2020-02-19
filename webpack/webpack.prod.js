const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',

  /**
   * We encourage you to have source maps enabled in production,
   * as they are useful for debugging as well as running
   * benchmark tests.
   */
  devtool: 'source-map',
})
