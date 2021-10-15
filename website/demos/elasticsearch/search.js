'use strict'

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

/**
 * https://www.elastic.co/guide/en/cloud/current/ec-getting-started-node-js.html
 */
async function read() {
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: { quote: 'winter' }
      }
    }
  })
  console.log(body.hits.hits)
}

read().catch(console.log)