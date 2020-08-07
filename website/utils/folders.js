const path = require('path')

const BASE_DIR = __dirname.replace('utils', '')

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
const PUBLIC_DIR_CHUNKS = path.resolve(PUBLIC_DIR, '_next', 'static', 'chunks')
module.exports.PUBLIC_DIR_CHUNKS = PUBLIC_DIR_CHUNKS
/**
 * PUBLIC_DIR_PAGES_CHUNKS
 *
 * Starting with Next.js 9.5 all page JavaScript bundles will use
 * content hashes instead of the build ID.
 * This allows for pages that have not changed between
 * deploys to remain in the browser and edge cache
 * without needing to be downloaded again.
 */
module.exports.PUBLIC_DIR_PAGES_CHUNKS = path.resolve(
  PUBLIC_DIR_CHUNKS,
  'pages',
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
 * HOOKS_DIR stores all custom react hooks
 */
module.exports.HOOKS_DIR = path.resolve(BASE_DIR, 'hooks')

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
 * ICON_DIR stores all predefined resources
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

/**
 * SEO_IMAGES_DIR stores all external seo images
 * The sources are:
 * - Facebook
 */
module.exports.SEO_IMAGES_DIR = path.resolve(BASE_DIR, 'seo-images')
