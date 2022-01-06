import config from '../configurations/config'

import {ethers, logger} from 'ethers'
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

export async function getTransferValue(transactionHash: string) {
  const chainTransaction = await getTransaction(transactionHash)

  if (!chainTransaction) {
    logger.info('No transaction found.')

    return false
  }
  logger.info('TX RECEIPT')
  logger.info(chainTransaction)

  return chainTransaction.value
}
