import {readdirSync} from 'fs'

function getDirectories() {
  const source = process.env.PWD + '/node_modules'

  return readdirSync(source, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

export default getDirectories
