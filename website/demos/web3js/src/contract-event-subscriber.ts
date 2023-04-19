import Web3 from 'web3'
import rpcURL from './config/rpcURL'

const web3 = new Web3(rpcURL)
const abi = require('./config/abi.json')

const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'

const contract = new web3.eth.Contract(abi, address)

function pastEventOptions() {
  let options = {
    filter: {
      value: ['1000', '1337'], //Only get events where transfer value was 1000 or 1337
    },
    fromBlock: '0x3CBDBD', //Number || "earliest" || "pending" || "latest"
    toBlock: '0x3D5DC3',
  }

  contract
    .getPastEvents('Transfer', options)
    .then(results => console.log(results))
    .catch(err => {
      throw err
    })
}

pastEventOptions()
