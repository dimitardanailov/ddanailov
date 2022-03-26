import tar from 'tar'

import getTarFiles from './get-tar-files'
import run from './command'
;(async () => {
  await run('rm -rf ./custom_node_modules && mkdir ./custom_node_modules')
  const tarFiles = getTarFiles()
  const mapUnzipRequest = tarFiles.map(tarFile => {
    return unzipFile(tarFile)
  })
  await Promise.all(mapUnzipRequest)
  await run(
    'mv -v ./custom_node_modules/node_modules/* ./custom_node_modules && rm -rf ./custom_node_modules/node_modules/',
  )
  console.log('completed!')
})()

function unzipFile(file) {
  return tar.x({
    file: file,
    strip: 1,
    C: 'custom_node_modules',
  })
}
