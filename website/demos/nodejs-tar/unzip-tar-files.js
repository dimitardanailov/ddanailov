import fs from 'fs'
import tar from 'tar'

import getTarFiles from './get-tar-files'
import run from './command'
;(async () => {
  await run('rm -rf ./custom_node_modules && mkdir ./custom_node_modules')
  const tarFiles = getTarFiles()
  for (let tarFile of tarFiles) {
    unzipFile(tarFile)
  }
})()

function unzipFile(file) {
  fs.createReadStream(file).pipe(
    tar.x({
      strip: 1,
      C: 'custom_node_modules',
    }),
  )
}
