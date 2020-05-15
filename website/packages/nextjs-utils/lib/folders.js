const path = require('path')

const BASE_DIR = __dirname.replace('node_modules/nextjs-utils/lib', '')

module.exports.BASE_DIR = BASE_DIR

/**
 * STATIC_DIR contains all static website files
 */
module.exports.STATIC_DIR = path.resolve(BASE_DIR, 'static')

/**
 * NEXT_BUILD_DIR is the core of the build process.
 * The folder is used by nextjs
 */
module.exports.NEXT_BUILD_DIR = path.resolve(BASE_DIR, '.next')

/**
 * PUBLIC_DIR stores files which should be deployed on firebase.
 */
const PUBLIC_DIR = path.resolve(BASE_DIR, 'public')
module.exports.PUBLIC_DIR = PUBLIC_DIR

/**
 * PUBLIC_DIR_CHUNKS stores all nextjs chunks files.
 */
module.exports.PUBLIC_DIR_CHUNKS = path.resolve(
  PUBLIC_DIR,
  '_next',
  'static',
  'chunks',
)

/**
 * STYLES_DIR stores all css files and styled components
 */
module.exports.STYLES_DIR = path.resolve(BASE_DIR, 'styles')

/**
 * COMPONENTS_DIR stores project components
 */
module.exports.COMPONENTS_DIR = path.resolve(BASE_DIR, 'components')

/**
 * LAYOUT_DIR stores all project layouts
 */
module.exports.LAYOUT_DIR = path.resolve(BASE_DIR, 'layouts')

/**
 * STYLED_DIR stores all styled components
 */
module.exports.STYLED_DIR = path.resolve(BASE_DIR, 'styled')

/**
 * DATA_DIR stores all predefined resources
 */
module.exports.DATA_DIR = path.resolve(BASE_DIR, 'data')

/**
 * UTILS_DIR stores all helper methods
 */
module.exports.UTILS_DIR = path.resolve(BASE_DIR, 'utils')

/**
 * DATA_DIR stores all predefined resources
 * Generator:
 * https://favicon.io/favicon-generator/
 *
 * Font: Leckerli One
 */
module.exports.ICON_DIR = path.resolve(BASE_DIR, 'icons')

/**
 * NEXTJS_PAGES creates a folder for each page per device
 */
module.exports.NEXTJS_PAGES = path.resolve(BASE_DIR, 'pages-nextjs')
