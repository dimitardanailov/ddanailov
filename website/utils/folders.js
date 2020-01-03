const path = require('path');

const BASE_DIR = __dirname.replace('utils', '');

module.exports.BASE_DIR = BASE_DIR;
module.exports.PUBLIC_DIR = path.resolve(BASE_DIR, 'public');
module.exports.STATIC_DIR = path.resolve(BASE_DIR, 'static');
module.exports.NEXT_BUILD_DIR = path.resolve(BASE_DIR, '.next');
