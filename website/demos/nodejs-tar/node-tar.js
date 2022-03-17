const tar = require('tar')
const fs = require('fs')

tar
  .c(
    {
      gzip: true,
      file: './test/my-tarball.tgz',
    },
    ['./node_modules'],
  )
  .then(_ => {
    console.log('zip!!')
    fs.createReadStream('./test/my-tarball.tgz').pipe(
      tar.x({
        strip: 1,
        C: 'some-dir', // alias for cwd:'some-dir', also ok
      }),
    )
  })
