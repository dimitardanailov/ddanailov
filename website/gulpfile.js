const {src, dest, series} = require('gulp')

const {
  PUBLIC_DIR,
  STATIC_DIR,
  NEXT_BUILD_DIR,
  PUBLIC_DIR_CHUNKS,
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

async function copyStaticResources() {
  const buildNumber = await getBuildNumber()
  const source = `${NEXT_BUILD_DIR}/static/${buildNumber}/pages/*.js`
  const destination = `${PUBLIC_DIR}/_next/static/${buildNumber}/pages`

  return src(source).pipe(dest(destination))
}

async function copyChunk() {
  const path = `${NEXT_BUILD_DIR}/static/chunks/*.js`
  return src(path).pipe(dest(PUBLIC_DIR_CHUNKS))
}

async function copyServiceWorker() {
  const path = `${NEXT_BUILD_DIR}/service-worker.js`
  console.log('path', path)

  return src(path).pipe(dest(PUBLIC_DIR))
}

async function copyNextResources() {
  const buildNumber = await getBuildNumber()
  const path = `${NEXT_BUILD_DIR}/server/static/${buildNumber}/pages/*.{js,html}`

  return src(path).pipe(dest(PUBLIC_DIR))
}

async function copyStyles() {
  const path = `${NEXT_BUILD_DIR}/static/css/*`
  const destination = `${PUBLIC_DIR}/_next/static/css`

  return src(path).pipe(dest(destination))
}

function copyStaticFiles() {
  return src(`${STATIC_DIR}/**.*`).pipe(dest(PUBLIC_DIR))
}

exports.default = series(
  copyRuntimeResources,
  copySSGBuildManifest,
  copyBuildManifest,
  copyServiceWorker,
  copyStyles,
  copyStaticResources,
  copyChunk,
  copyNextResources,
  copyStaticFiles,
)
