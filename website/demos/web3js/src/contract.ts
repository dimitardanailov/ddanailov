import Web3 from 'web3'
import rpcURL from './config/rpcURL'

const web3 = new Web3(rpcURL)
const abi = require('./config/abi.json')

const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'

const contract = new web3.eth.Contract(abi, address)

contract.methods.totalSupply().call((err, result) => {
  console.log(result)
})
contract.methods.name().call((err, result) => {
  console.log(result)
})
contract.methods.symbol().call((err, result) => {
  console.log(result)
})
contract.methods
  .balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07')
  .call((err, result) => {
    console.log(result)
  })
