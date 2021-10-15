'use strict'

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

/**
 * https://kb.objectrocket.com/elasticsearch/how-to-return-all-documents-from-an-index-in-elasticsearch
 */
async function read() {
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match_all: { }
      }
    }
  })
  console.log(body.hits.hits)
}

read().catch(console.log)