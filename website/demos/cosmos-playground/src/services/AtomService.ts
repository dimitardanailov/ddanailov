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
  constructor() {
    this.keyType = KeyType.ECDSA
  }

  async getBalance(address: string): Promise<string> {
    return '0'
  }

  async getTransaction(txHash: string) {}

  async getTransactions(address: string) {}

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
