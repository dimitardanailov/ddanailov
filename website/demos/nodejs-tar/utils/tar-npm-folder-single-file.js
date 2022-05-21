import tar from 'tar'

import run from './command.js'

const tarNpmFolderSingleFile = async filename => {
  await run(`cd ${process.env.PWD}`)
  await run('rm -rf ./.modules && mkdir ./.modules')

  tar.c(
    {
      gzip: true,
      file: `./.modules/${filename}.tgz`,
    },
    [`./node_modules/`],
  )
}

export default tarNpmFolderSingleFile
