import config from '../configurations/config'

import {ethers} from 'ethers'

const configName = 'testnet'
const networkConfig = config.network[configName]

const rpcProvider = new ethers.providers.JsonRpcProvider(
  networkConfig.httpProvider,
  networkConfig.chainId,
)

async function getBalance(address: string) {
  const balance = await rpcProvider.getBalance(address)

  return balance.toString()
}

export {getBalance}
