require('dotenv').config()

import {StargateClient, IndexedTx} from '@cosmjs/stargate'

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

  async getTransaction(txHash: string): Promise<IndexedTx | null> {
    try {
      const client = await StargateClient.connect(this.endpoint)
      const transaction = await client.getTx(txHash)

      return transaction
    } catch (err) {
      console.error('Cosmos.getTransaction', err)
    }

    return null
  }

  async getTransactions(address: string) {
    const client = await StargateClient.connect(this.endpoint)
    const query = {sentFromOrTo: address}
    const results = await client.searchTx(query)
    console.log('results', results)
  }

  async getGasFee() {}

  async getTransferValue(transactionHash: string) {}

  async monitorTransaction(address: TransactionStatusCheck) {}

  async getTransferFee(transactionHash: string): Promise<string> {
    return '0'
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
