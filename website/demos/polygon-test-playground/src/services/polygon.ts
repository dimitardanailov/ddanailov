import config from '../configurations/config'

import {ethers, logger} from 'ethers'
import BigNumber from 'bignumber.js'
import BN from 'bn.js'

import {TransactionResponse} from '@ethersproject/abstract-provider'

import TransactionStatusCheck from '../interfaces/TransactionStatusCheck'
import TransactionHelper from './TransactionHelper'

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

export async function monitorTransaction(transaction: TransactionStatusCheck) {
  const chainTransaction = await getTransaction(transaction.transaction_hash)

  if (!chainTransaction) {
    logger.info('No transaction found.')

    return false
  }

  logger.info('TX RECEIPT')
  logger.info(chainTransaction)

  return chainTransaction.confirmations > 15
}

export async function transfer(
  senderPublicKey: string,
  toAddress: string,
  amountWei: string,
  tokenCategory: string,
  transactionId: string,
  keystoreId: string,
  signRequest: any,
  isColdWalletRequest?: boolean,
) {
  const txHelper = new TransactionHelper()
  const fromAddress = ethers.utils.computeAddress(
    Buffer.from(senderPublicKey, 'hex'),
  )
  const gasFee = await txHelper.getRecommendedFee()
  const gasLimit = await txHelper.estimateGas(
    fromAddress,
    toAddress,
    amountWei,
    '', // Empty data for a transfer txn
  )
  const rawTransaction = await txHelper.buildRawTransaction(
    fromAddress,
    toAddress,
    new BN(gasLimit.toNumber()),
    new BN(gasFee.toNumber()),
    amountWei,
    '', // Empty data for a transfer txn
  )

  console.log('gasLimit', gasLimit, rawTransaction)
}
