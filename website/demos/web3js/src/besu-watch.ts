import Web3 from 'web3'
const Web3Quorum = require('web3js-quorum')

import besuConfig from './config/besuConfig'

const web3 = new Web3Quorum(new Web3(besuConfig.uri))

// get the contract instance
const contractInstance = new web3.eth.Contract(
  besuConfig.contractAbi,
  besuConfig.contractAddress,
)

// define the event to watch
const eventName = 'AdminChanged'

console.log('events ...', contractInstance.events.AdminChanged)

// listen for contract events
async function listenForContractEvents() {
  contractInstance.events[eventName]((error, event) => {
    if (error) {
      console.error('Error:', error)
      return
    }

    const doc = {
      contractAddress: event.address,
      eventName: eventName,
      transactionHash: event.transactionHash,
      blockNumber: event.blockNumber,
      logIndex: event.logIndex,
      args: event.returnValues,
    }

    console.log('doc', doc)
  })
}

async function main() {
  await listenForContractEvents()
}

main()
