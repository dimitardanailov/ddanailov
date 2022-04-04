import {rawSecp256k1PubkeyToRawAddress} from '@cosmjs/amino'
import {toBech32} from '@cosmjs/encoding'

import elliptic from 'elliptic'
const secp256k1 = new elliptic.ec('secp256k1')

export type AddressInfo = {
  address: string
  pubKey: Uint8Array
}

function createCosmosAddressInfoByEDCAKey(EDCAKey: string): AddressInfo {
  const pubKeyArray: Uint8Array = Uint8Array.from(Buffer.from(EDCAKey, 'hex'))

  const compressedVersion = Uint8Array.from(
    secp256k1.keyFromPublic(pubKeyArray).getPublic(true, 'array'),
  )

  const prefix = 'cosmos'
  const rawAddress = rawSecp256k1PubkeyToRawAddress(compressedVersion)
  const bench32Format = toBech32(prefix, rawAddress)

  return {
    address: bench32Format,
    pubKey: compressedVersion,
  }
}

export default createCosmosAddressInfoByEDCAKey
