const withCSS = require('@zeit/next-css')

const {
  STYLES_DIR,
  COMPONENTS_DIR,
  LAYOUT_DIR,
  STYLED_DIR,
} = require('./utils/folders')

module.exports = withCSS({
  webpack: config => {
    // file and url loader webpack support.
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    config.resolve.alias['@ddanailov/styles'] = STYLES_DIR
    config.resolve.alias['@ddanailov/components'] = COMPONENTS_DIR
    config.resolve.alias['@ddanailov/layouts'] = LAYOUT_DIR
    config.resolve.alias['@ddanailov/styled'] = STYLED_DIR

    return config
  },
})
