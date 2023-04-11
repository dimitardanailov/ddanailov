import Web3 from 'web3'
import rpcURL from './config/rpcURL'

const web3 = new Web3(rpcURL)

const address = '0x3a42086e4c2511e502c0b6ca87e35c8455388d39'
web3.eth.getBalance(address, (err, wei) => {
  const balance = web3.utils.fromWei(wei, 'ether')
  console.log('balance', balance)
})
