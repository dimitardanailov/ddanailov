const { src, dest, series } = require('gulp');

const { PUBLIC_DIR, STATIC_DIR } = require('./utils/folders');

function copyPage404() {
  return src(`${STATIC_DIR}/404.html`).pipe(dest(PUBLIC_DIR));
}

exports.default = series(copyPage404);
