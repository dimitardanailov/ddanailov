// https://consensys.github.io/web3js-quorum/latest/index.html

import Web3 from 'web3'
const Web3Quorum = require('web3js-quorum')

const web3 = new Web3Quorum(
  new Web3('http://cec-eth.mosaic-dev.siemens-energy.cloud/'),
)

// Define the smart contract ABI and contract address
const contractAbi = [] // Replace with the actual ABI
const contractAddress = '0x...' // Replace with the actual address

console.log('web3', web3)

// Create a contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress)
