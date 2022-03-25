import fs from 'fs'
import tar from 'tar'

import getTarFiles from './get-tar-files'
;(async () => {
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
