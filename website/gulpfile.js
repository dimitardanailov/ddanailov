const { src, dest, series } = require('gulp');

const {
  PUBLIC_DIR,
  STATIC_DIR,
  NEXT_BUILD_DIR,
  PUBLIC_DIR_CHUNKS,
} = require('./utils/folders');
const getBuildNumber = require('./utils/nextjs/getBuildNumber');

async function copyRuntimeResources() {
  const source = `${NEXT_BUILD_DIR}/static/runtime/*.js`;
  const destination = `${PUBLIC_DIR}/_next/static/runtime`;

  return src(source).pipe(dest(destination));
}

async function copyBuildManifest() {
  const buildNumber = await getBuildNumber();
  const source = `${NEXT_BUILD_DIR}/static/${buildNumber}/_buildManifest.js`;
  const destination = `${PUBLIC_DIR}/_next/static/${buildNumber}`;

  return src(source).pipe(dest(destination));
}

async function copyStaticResources() {
  const buildNumber = await getBuildNumber();
  const source = `${NEXT_BUILD_DIR}/static/${buildNumber}/pages/*.js`;
  const destination = `${PUBLIC_DIR}/_next/static/${buildNumber}/pages`;

  return src(source).pipe(dest(destination));
}

async function copyChunk() {
  const path = `${NEXT_BUILD_DIR}/static/chunks/*.js`;
  return src(path).pipe(dest(PUBLIC_DIR_CHUNKS));
}

async function copyNextResources() {
  const buildNumber = await getBuildNumber();
  const path = `${NEXT_BUILD_DIR}/server/static/${buildNumber}/pages/*.{js,html}`;

  return src(path).pipe(dest(PUBLIC_DIR));
}

function copyStaticFiles() {
  return src(`${STATIC_DIR}/**.*`).pipe(dest(PUBLIC_DIR));
}

exports.default = series(
  copyRuntimeResources,
  copyBuildManifest,
  copyStaticResources,
  copyChunk,
  copyNextResources,
  copyStaticFiles,
);
