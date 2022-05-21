// import unzipNpmModules from './utils/unzip-npm-modules.js'

import {unzipNpmModules} from 'tar-npm-modules'
;(async () => {
  const path = './custom_node_modules'
  unzipNpmModules(path)
})()
