import tar from 'tar'

import getDirectories from './get-directories'
import run from './command'

const tarFolder = folder => {
  tar.c(
    {
      gzip: true,
      file: `./.modules/${folder}.tgz`,
    },
    [`./node_modules/${folder}`],
  )
}

;(async () => {
  await run('rm -rf ./.modules && mkdir ./.modules')
  const folders = await getDirectories('./node_modules')
  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i]
    tarFolder(folder)
  }
})()
