import getDirectories from './get-directories'
import tar from 'tar'

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
  const folders = await getDirectories('./node_modules')
  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i]
    tarFolder(folder)
  }
})()
