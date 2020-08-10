require('dotenv').config()

const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')()
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const {
  STYLES_DIR,
  COMPONENTS_DIR,
  LAYOUT_DIR,
  STYLED_DIR,
  UTILS_DIR,
  NEXTJS_PAGES,
  HOOKS_DIR,
  REDUCERS_DIR,
} = require('./utils/folders')

/**
 * Each page has two main layouts
 * - Desktop
 * - Mobile
 *
 * Nextjs uses page folder. This is the reason to create a new folder.
 * The new folder is responsible to hold
 * - Desktop layout
 * - Mobile layout
 * - Page Components (Desktop or Mobile)
 *
 * @param {string} page
 */
function getNextJSPageDeviceLayout(page) {
  return `${NEXTJS_PAGES}/${page}/`
}

const nextConfig = {
  webpack: config => {
    // file and url loader webpack support.
    config.module.rules.push({
      test: /\.(png|jpg|webp|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    config.resolve.alias['@ddanailov/styles'] = STYLES_DIR
    config.resolve.alias['@ddanailov/components'] = COMPONENTS_DIR
    config.resolve.alias['@ddanailov/hooks'] = HOOKS_DIR
    config.resolve.alias['@ddanailov/reducers'] = REDUCERS_DIR

    // device layouts
    config.resolve.alias['@homepage'] = getNextJSPageDeviceLayout('Homepage')
    config.resolve.alias['@about'] = getNextJSPageDeviceLayout('About')
    config.resolve.alias['@thanks'] = getNextJSPageDeviceLayout('Thanks')
    config.resolve.alias['@pages'] = getNextJSPageDeviceLayout('Pages')
    config.resolve.alias['@contacts'] = getNextJSPageDeviceLayout('Contacts')

    config.resolve.alias['@ddanailov/layouts'] = LAYOUT_DIR
    config.resolve.alias['@ddanailov/styled'] = STYLED_DIR
    config.resolve.alias['@ddanailov/utils'] = UTILS_DIR

    return config
  },
}

// prettier-ignore
module.exports = withPlugins([
  withCSS,

  withMDX,

  withOffline

], nextConfig);
