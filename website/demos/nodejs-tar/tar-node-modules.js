import tar from 'tar'

import getDirectories from './utils/get-directories.js'
import run from './utils/command.js'

const tarFolder = folder => {
  tar.c(
    {
      gzip: true,
      file: `${process.env.PWD}/.modules/${folder}.tgz`,
    },
    [`${process.env.PWD}/node_modules/${folder}`],
  )
}

;(async () => {
  await run('rm -rf ./.modules && mkdir ./.modules')
  const folders = await getDirectories()
  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i]
    tarFolder(folder)
  }
})()
