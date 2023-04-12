/**
 * https://www.linkedin.com/pulse/how-build-smart-contract-event-listener-expressjs-solidity-wang
 */
import rpcURL from './config/rpcURL'

const Web3 = require('web3')

const CONTRACT_ADDRESS = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'
const CONTRACT_ABI = require('./config/abi.json')

const web3 = new Web3(rpcURL)
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

function getTransferDetails(event) {
  const {from, to, value} = event.returnValues
  const convertedAmount = web3.utils.fromWei(value)
  if (convertedAmount > 32) {
    console.log(`From: ${from} - To: ${to} - Value: ${convertedAmount}`)
  }
}

async function getEvents() {
  const latestBlock = await web3.eth.getBlockNumber()
  console.log('latestBlock', latestBlock)

  const historicalBlock = latestBlock - 10000

  console.log(
    `Latest block: ${latestBlock} - Historical block: ${historicalBlock}`,
  )

  let options = {
    filter: {
      value: ['1000', '1337'], //Only get events where transfer value was 1000 or 1337
    },
    fromBlock: '0x3CBDBD', //Number || "earliest" || "pending" || "latest"
    toBlock: '0x3D5DC3',
  }

  const events = await contract.getPastEvents('Transfer', options)
  events.forEach(getTransferDetails)
}

getEvents()
