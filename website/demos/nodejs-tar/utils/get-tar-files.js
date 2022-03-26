import fs from 'fs'

function getTarFiles() {
  const tarFiles = []
  const folder = './.modules/'
  fs.readdirSync(folder).forEach(file => {
    tarFiles.push(`${folder}${file}`)
  })

  return tarFiles
}

export default getTarFiles
