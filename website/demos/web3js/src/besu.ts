// https://consensys.github.io/web3js-quorum/latest/index.html

import Web3 from 'web3'
const Web3Quorum = require('web3js-quorum')

import besuConfig from './config/besuConfig'

const web3 = new Web3Quorum(new Web3(besuConfig.uri))

// Define the smart contract ABI and contract address
// const contractAbi = [] // Replace with the actual ABI
// const contractAddress = '0x...' // Replace with the actual address

// Create a contract instance
const contractInstance = new web3.eth.Contract(
  besuConfig.contractAbi,
  besuConfig.contractAddress,
)

console.log('contract', contractInstance)
