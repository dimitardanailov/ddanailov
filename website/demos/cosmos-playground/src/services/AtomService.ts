require('dotenv').config()

import {StargateClient, IndexedTx} from '@cosmjs/stargate'
import {decodeTxRaw, DecodedTxRaw} from '@cosmjs/proto-signing'

import TransactionStatusCheck from '../interfaces/TransactionStatusCheck'
import BigNumber from 'bignumber.js'
import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing'
import createCosmosAddressByEDCAKey from './address/createCosmosAddressByEDCAKey'

enum KeyType {
  ECDSA = 'ECDSA',
  ED25519 = 'ED25519',
}

import createNewKeyPair from '../mockup/createNewKeyPair'
import customPubkeyToAddress from '././address/createCosmosAddressByEDCAKey'
import isValidAddress from './address/isValidAddress'
import decodeRawLog, {AtomTransaction} from './transactions/decodeRawLog'

export default class AtomService {
  public keyType: KeyType
  public endpoint: string
  constructor() {
    this.keyType = KeyType.ECDSA

    if (process.env.NODE_ENV === 'production') {
      this.endpoint = 'https://rpc.cosmos.network'
    } else {
      this.endpoint = 'https://rpc.sentry-01.theta-testnet.polypore.xyz'
    }
    console.log(this.endpoint)
  }

  async getBalance(address: string): Promise<string> {
    const denomFee = 'uatom'
    const client = await StargateClient.connect(this.endpoint)
    const response = await client.getBalance(address, denomFee)
    const amount = new BigNumber(response.amount)

    return amount.toString()
  }

  async getSingleTransaction(txHash: string): Promise<IndexedTx | null> {
    try {
      const client = await StargateClient.connect(this.endpoint)
      const transaction = await client.getTx(txHash)

      return transaction
    } catch (err) {
      console.error('Cosmos.getTransaction', err)
    }

    return null
  }

  async getTransaction(txHash: string): Promise<IndexedTx | null> {
    const transaction = await this.getSingleTransaction(txHash)

    return transaction
  }

  async getTransactions(address: string) {
    const client = await StargateClient.connect(this.endpoint)
    const query = {sentFromOrTo: address}
    const results = await client.searchTx(query)

    const transactions = results
      .filter(transaction => {
        return transaction.code === 0
      })
      .filter(transaction => {
        try {
          const log = JSON.parse(transaction.rawLog)
          const arrayIsValid = log.length > 0

          return arrayIsValid
        } catch (e) {
          return false
        }
      })
      .map((indexedTx: IndexedTx) => {
        const cosmosTransaction: AtomTransaction = decodeRawLog(
          indexedTx.rawLog,
        )

        return {
          hash: indexedTx.hash,
          source: cosmosTransaction.sender.toLowerCase(),
          destination: cosmosTransaction.recipient.toLowerCase(),
          value: Number(cosmosTransaction.amount),
          rawValue: cosmosTransaction.amount,
        }
      })
      .filter(indexedTx => {
        return indexedTx.source !== address.toLowerCase()
      })

    return transactions
  }

  async getGasFee() {
    const fee = new BigNumber(80000)

    return fee
  }

  async getTransferValue(transactionHash: string) {
    const transaction = await this.getSingleTransaction(transactionHash)

    if (typeof transaction === null) {
      return '0'
    }

    const indexedTx: IndexedTx = transaction!
    if (indexedTx.code !== 0) {
      return '0'
    }
    const cosmosTransaction: AtomTransaction = decodeRawLog(indexedTx.rawLog)

    return cosmosTransaction.amount
  }

  async monitorTransaction(address: TransactionStatusCheck): Promise<boolean> {
    const txHash: string = address['transaction_hash']
    const transaction = await this.getSingleTransaction(txHash)

    if (typeof transaction === null) {
      return false
    }

    const indexedTx: IndexedTx = transaction!

    return indexedTx.code === 0
  }

  async getTransferFee(transactionHash: string): Promise<string> {
    const transaction = await this.getSingleTransaction(transactionHash)
    if (!transaction) {
      return '0'
    }

    const indexedTx: IndexedTx = transaction!

    return String(indexedTx.gasUsed)
  }

  async requestAddressCreation() {
    const {publicKey, keyId} = await createNewKeyPair(this.keyType)
    const address = await customPubkeyToAddress(publicKey)
    const addressIsValid = isValidAddress(address, 'cosmos')

    if (!addressIsValid) {
      throw new Error(`${address} is NOT valid cosmos address!`)
    }

    return {
      keyId,
      publicKey,
      address,
    }
  }
}
