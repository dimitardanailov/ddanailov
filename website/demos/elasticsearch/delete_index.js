'use strict'

const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: 'http://localhost:9200'})

client.indices
  .delete({
    index: 'audit-*',
  })
  .then(
    function (resp) {
      console.log('Successful query!')
      console.log(JSON.stringify(resp, null, 4))
    },
    function (err) {
      console.trace(err.message)
    },
  )
