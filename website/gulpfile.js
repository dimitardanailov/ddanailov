const {src, dest, series} = require('gulp')

const {
  PUBLIC_DIR,
  STATIC_DIR,
  NEXT_BUILD_DIR,
  ICON_DIR,
  SEO_IMAGES_DIR,
  PUBLIC_DIR_CHUNKS,
  PUBLIC_DIR_PAGES_CHUNKS,
} = require('./utils/folders')
const getBuildNumber = require('./utils/nextjs/getBuildNumber')

async function copyManifestFile(filename) {
  const buildNumber = await getBuildNumber()
  const source = `${NEXT_BUILD_DIR}/static/${buildNumber}/${filename}.js`
  const destination = `${PUBLIC_DIR}/_next/static/${buildNumber}`

  return src(source).pipe(dest(destination))
}

async function copyRuntimeResources() {
  const source = `${NEXT_BUILD_DIR}/static/runtime/*.js`
  const destination = `${PUBLIC_DIR}/_next/static/runtime`

  return src(source).pipe(dest(destination))
}

async function copyBuildManifest() {
  return await copyManifestFile('_buildManifest')
}

async function copySSGBuildManifest() {
  return await copyManifestFile('_ssgManifest')
}

async function copyPages() {
  const source = `${NEXT_BUILD_DIR}/server/pages/*.{js,html}`

  return src(source).pipe(dest(PUBLIC_DIR))
}

async function copyPagesChunks() {
  const source = `${NEXT_BUILD_DIR}/static/chunks/pages/*.js`

  return src(source).pipe(dest(PUBLIC_DIR_PAGES_CHUNKS))
}

async function copyStaticResources() {
  const buildNumber = await getBuildNumber()
  const source = `${NEXT_BUILD_DIR}/static/${buildNumber}/pages/*.js`
  const destination = `${PUBLIC_DIR}/_next/static/${buildNumber}/pages`

  return src(source).pipe(dest(destination))
}

async function copyChunks() {
  const path = `${NEXT_BUILD_DIR}/static/chunks/*.js`
  return src(path).pipe(dest(PUBLIC_DIR_CHUNKS))
}

async function copyServiceWorker() {
  const path = `${NEXT_BUILD_DIR}/service-worker.js`

  return src(path).pipe(dest(PUBLIC_DIR))
}

async function copyStyles() {
  const path = `${NEXT_BUILD_DIR}/static/css/*`
  const destination = `${PUBLIC_DIR}/_next/static/css`

  return src(path).pipe(dest(destination))
}

async function copyStaticFiles() {
  return src(`${STATIC_DIR}/**.*`).pipe(dest(PUBLIC_DIR))
}

async function copyIcons() {
  return src(`${ICON_DIR}/**.*`).pipe(dest(PUBLIC_DIR))
}

async function copySEOImages() {
  return src(`${SEO_IMAGES_DIR}/**.*`).pipe(dest(PUBLIC_DIR))
}

async function copyCryptoIcons() {
  return src(`${STATIC_DIR}/crypto/**.*`).pipe(dest(PUBLIC_DIR))
}

async function copyServiceWorkerStaticFiles() {
  const destination = `${PUBLIC_DIR}/_next/static/`
  return src(`${STATIC_DIR}/**.*`).pipe(dest(destination))
}

exports.default = series(
  copyRuntimeResources,
  copySSGBuildManifest,
  copyBuildManifest,
  copyServiceWorker,
  copyServiceWorkerStaticFiles,
  copyStyles,
  copyStaticResources,
  copyChunks,
  copyStaticFiles,
  copyIcons,
  copySEOImages,
  copyCryptoIcons,
  copyPages,
  copyPagesChunks,
)
