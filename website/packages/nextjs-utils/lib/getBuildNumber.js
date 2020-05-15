const fs = require('fs')
const {NEXT_BUILD_DIR} = require('./folders')

const file = `${NEXT_BUILD_DIR}/BUILD_ID`

module.exports = function () {
  const promise = new Promise((resolve, calbackErr) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.error(err)
        calbackErr(err)
      }

      resolve(data.toString())
    })
  })

  return promise
}
