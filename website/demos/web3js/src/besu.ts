// https://consensys.github.io/web3js-quorum/latest/index.html

import Web3 from 'web3'
const Web3Quorum = require('web3js-quorum')

import besuConfig from './config/besuConfig'

const web3 = new Web3Quorum(new Web3(besuConfig.uri))

// Create a contract instance
const contractInstance = new web3.eth.Contract(
  besuConfig.contractAbi,
  besuConfig.contractAddress,
)

console.log(Object.keys(contractInstance))

console.log('providers', contractInstance.providers)

const events = contractInstance.events.allEvents()

events
  .on('data', async event => {
    // Index the event data into Elasticsearch
    console.log('event', event)
  })
  .on('error', error => {
    console.error(error)
  })
