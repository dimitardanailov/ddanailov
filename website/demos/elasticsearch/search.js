'use strict'

const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: 'http://localhost:9200'})

/**
 * https://www.elastic.co/guide/en/cloud/current/ec-getting-started-node-js.html
 */
async function read() {
  const {body} = await client.search({
    index: 'audit-*',
    body: {
      sort: [
        {
          created_at: {
            order: 'desc',
            unmapped_type: 'long',
            missing: '_last',
          },
        },
      ],
      query: {
        bool: {
          filter: [
            {
              range: {
                created_at: {
                  gte: '2010-11-11',
                },
              },
            },
            {
              match: {
                user_id:
                  'ef0ba8d3-5c1e-4828-aa3c-f8dd4284c6f7 091858a8-36f5-11ec-8d3d-0242ac130003',
              },
            },
            {
              match: {
                customer_id:
                  'ab0ba8d3-5c1e-4828-aa3c-f8dd4284c6f7 ef0ba8d3-5c1e-4828-aa3c-f8dd4284c6f7',
              },
            },
          ],
        },
      },
    },
  })
  console.log(body.hits.hits)
}

read().catch(console.log)
