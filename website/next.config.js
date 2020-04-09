require('dotenv').config()

const withMDX = require('@next/mdx')()
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const {
  STYLES_DIR,
  COMPONENTS_DIR,
  LAYOUT_DIR,
  STYLED_DIR,
  UTILS_DIR,
} = require('./utils/folders')

const cssSetup = withCSS({
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
    config.resolve.alias['@ddanailov/utils'] = UTILS_DIR

    return config
  },
})

const mdxSetup = withMDX(cssSetup)

module.exports = withOffline(mdxSetup)
