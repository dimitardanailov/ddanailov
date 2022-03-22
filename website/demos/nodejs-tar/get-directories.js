const {
  promises: {readdir},
} = require('fs')

const getDirectories = async source =>
  (await readdir(source, {withFileTypes: true}))
    .filter(file => file.isDirectory())
    .map(file => file.name)

export default getDirectories
