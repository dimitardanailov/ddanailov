// https://consensys.github.io/web3js-quorum/latest/index.html

import Web3 from 'web3'

import besuConfig from './config/besuConfig'

const httpProvider = new Web3.providers.HttpProvider(besuConfig.uri)
const web3 = new Web3(httpProvider)

web3.eth.getBlockNumber((err, blockNumber) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Current block number:', blockNumber)
    web3.eth.getBlock(blockNumber, (err, block) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Block information:', block)
      }
    })
  }
})
