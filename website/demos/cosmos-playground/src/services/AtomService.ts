require('dotenv').config()

import {
  StargateClient,
  IndexedTx,
  GasPrice,
  StdFee,
  calculateFee,
} from '@cosmjs/stargate'
import {decodeTxRaw, DecodedTxRaw} from '@cosmjs/proto-signing'

import TransactionStatusCheck from '../interfaces/TransactionStatusCheck'
import BigNumber from 'bignumber.js'
import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing'

enum KeyType {
  ECDSA = 'ECDSA',
  ED25519 = 'ED25519',
}

import createNewKeyPair from '../mockup/createNewKeyPair'
import createCosmosAddressInfoByEDCAKey, {
  AddressInfo,
} from './address/createCosmosAddressInfoByEDCAKey'
import isValidAddress from './address/isValidAddress'
import decodeRawLog, {AtomTransaction} from './transactions/decodeRawLog'

const logger = {
  atomservice: function (message: string) {
    console.log('message', message)
  },
}

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
  }

  async sweepWallet(
    signer: {publicKey: string; keystoreId: string},
    partialTransfers: {toAddress: string; amount: string}[],
    changeAddress: string,
    tokenCategory: string,
    transactionId: string,
    signRequest: any,
    depositTransactionHash: string,
    fromAddress?: string,
  ) {
    logger.atomservice(
      `Atom service sweepWallet: signer ${JSON.stringify(signer)}`,
    )
  }

  async transfer(
    senderPublicKey: string,
    toAddress: string,
    amount: string,
    tokenCategory: string,
    transactionId: string,
    keystoreId: string,
    signRequest: any,
    isColdWalletRequest?: boolean,
  ) {
    return null
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
    const COSMOS_MIN_TX_FEE = 80000
    const fee = new BigNumber(COSMOS_MIN_TX_FEE)

    return fee
  }

  async getDefaultGasPrice() {
    const fee = await this.getGasFee()
    const defaultGasPrice = GasPrice.fromString('0.025uatom')
    const defaultSendFee: StdFee = calculateFee(fee.toNumber(), defaultGasPrice)

    return defaultSendFee
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
    const addressInfo: AddressInfo = await createCosmosAddressInfoByEDCAKey(
      publicKey,
    )
    const addressIsValid = isValidAddress(addressInfo.address, 'cosmos')

    if (!addressIsValid) {
      throw new Error(`${addressInfo.address} is NOT valid cosmos address!`)
    }

    return {
      keyId,
      publicKey,
      address: addressInfo.address,
    }
  }

  calculateFeeForTransfer():
    | number
    | void
    | BigNumber
    | Promise<number | BigNumber> {
    return this.getGasFee()
  }

  handleCompletedTransaction(transaction: TransactionStatusCheck) {
    throw new Error('Method not implemented.')
  }

  deployIssuance() {
    return
  }
  getBalanceToken() {
    return
  }
  distributeToken() {
    return
  }
  lockToken() {
    return
  }
  unlockToken() {
    return
  }
  mintToken() {
    return
  }
  redeemToken() {
    return
  }
  recoveryToken() {
    return
  }
  distributeDividend() {
    return
  }
  distributeDividendRequest() {
    return
  }
  onCreateCustomer() {
    return
  }
  onCreateIssuance() {
    return
  }
  onCreateSettlement() {
    return
  }
  deployWallet() {
    return
  }
  postDeployWallet() {
    return
  }
}
