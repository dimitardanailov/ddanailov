require('dotenv').config()

import algosdk from 'algosdk'

const API_KEY = process.env.ALGO_API_KEY || ''

const port = ''
const token = {
  'x-api-key': API_KEY,
}

console.log('token', token)

/* Use the following code to get info from testnet */
const Testserver = 'https://testnet-algorand.api.purestake.io/idx2'
let client = new algosdk.Algodv2(token, Testserver, port)

export async function getBalance(address: string): Promise<string> {
  try {
    const accountInfo = await client.accountInformation(address).do()
    if ('account' in accountInfo) {
      return accountInfo.account.amount
    }
  } catch (err) {
    console.error('Algorand.getBalance.error', err)
  }

  return '0'
}
