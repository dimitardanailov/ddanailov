import tar from 'tar'

import getDirectories from './get-directories.js'
import run from './command.js'

const tarFolder = folder => {
  tar.c(
    {
      gzip: true,
      file: `./.modules/${folder}.tgz`,
    },
    [`./node_modules/${folder}`],
  )
}

async function tarNpmFolders() {
  await run(`cd ${process.env.PWD}`)
  await run('rm -rf ./.modules && mkdir ./.modules')
  const folders = await getDirectories()
  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i]
    tarFolder(folder)
  }
}

export default tarNpmFolders
