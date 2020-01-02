const { src, dest, series } = require('gulp');

const { PUBLIC_DIR, STATIC_DIR } = require('./utils/folders');
const getBuildNumber = require('./utils/nextjs/getBuildNumber');

async function helloWorld() {
  const buildNumber = await getBuildNumber();
  console.log('build number:', buildNumber);
}

function copyPage404() {
  return src(`${STATIC_DIR}/404.html`).pipe(dest(PUBLIC_DIR));
}

exports.default = series(helloWorld, copyPage404);
