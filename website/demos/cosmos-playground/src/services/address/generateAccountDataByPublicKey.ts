import {AccountData, Algo} from '@cosmjs/proto-signing'
import createCosmosAddressInfoByEDCAKey, {
  AddressInfo,
} from './createCosmosAddressInfoByEDCAKey'

interface CustomAccountData extends AccountData {
  algo: Algo
  pubkey: Uint8Array
  address: string
}

function generateAccountDataByPublicKey(EDCAKey: string): CustomAccountData {
  const algo: Algo = 'secp256k1'
  const addressInfo: AddressInfo = createCosmosAddressInfoByEDCAKey(EDCAKey)

  const accountData: CustomAccountData = {
    address: addressInfo.address,
    algo: algo,
    pubkey: addressInfo.pubKey,
  }

  return accountData
}

export default generateAccountDataByPublicKey
