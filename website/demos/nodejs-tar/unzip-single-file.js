import unzipSingleFile from './utils/unzip-single-file.js'
;(async () => {
  const fileLocation = './.modules/demo.tgz'
  const path = './custom_node_modules'
  await unzipSingleFile(fileLocation, path)
})()
