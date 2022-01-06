import config from '../configurations/config'

import {ethers} from 'ethers'
import BigNumber from 'bignumber.js'

import {TransactionResponse} from '@ethersproject/abstract-provider'

const configName = 'testnet'
const networkConfig = config.network[configName]

const rpcProvider = new ethers.providers.JsonRpcProvider(
  networkConfig.httpProvider,
  networkConfig.chainId,
)

export async function getBalance(address: string) {
  const balance = await rpcProvider.getBalance(address)

  return balance.toString()
}

export async function getTransaction(
  txHash: string,
): Promise<TransactionResponse> {
  const transaction = await rpcProvider.getTransaction(txHash)

  return transaction
}

export async function getTransactions(walletAddress: string) {
  return []
}

export async function getGasFee() {
  const gasFee = await rpcProvider.getGasPrice()
  return new BigNumber(gasFee.toNumber())
}
