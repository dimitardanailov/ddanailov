import {ethers} from 'ethers'
import rpcURL from './config/etherium/rpcURL'

const rpcProvider = new ethers.JsonRpcProvider(rpcURL)

export async function getBalance(address: string) {
  const balance = await rpcProvider.getBalance(address)

  return balance.toString()
}

;(async () => {
  const address1 = '0xcF6715Cbd7a900BBbde15E8d1dD6779815258e60'
  const balance1 = await getBalance(address1)
  printResult(address1, balance1)

  const address2 = '0x3a42086e4c2511e502c0b6ca87e35c8455388d39'
  const balance2 = await getBalance(address2)
  printResult(address2, balance2)
})()

function printResult(address: string, balance: string) {
  const response = `{address:} -> ${address} | {balance:} -> ${balance}`
  console.log(response)
}
