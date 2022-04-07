import tar from 'tar'
import fs from 'fs'

import run from './command.js'

const unzipSingleFile = async (fileLocation, path) => {
  await run(`cd ${process.env.PWD}`)
  await run(`rm -rf ${path}`)
  await run(`mkdir ${path}`)

  fs.createReadStream(fileLocation).pipe(
    tar.x({
      strip: 1,
      C: path,
    }),
  )
}

export default unzipSingleFile
