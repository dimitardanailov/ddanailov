import {rawSecp256k1PubkeyToRawAddress} from '@cosmjs/amino'
import {toBech32} from '@cosmjs/encoding'

import elliptic from 'elliptic'
const secp256k1 = new elliptic.ec('secp256k1')

function createCosmosAddressByEDCAKey(EDCAKey: string): string {
  const pubKeyArray: Uint8Array = Uint8Array.from(Buffer.from(EDCAKey, 'hex'))

  const compressedVersion = Uint8Array.from(
    secp256k1.keyFromPublic(pubKeyArray).getPublic(true, 'array'),
  )

  const prefix = 'cosmos'
  const rawAddress = rawSecp256k1PubkeyToRawAddress(compressedVersion)
  const bench32Format = toBech32(prefix, rawAddress)

  return bench32Format
}

export default createCosmosAddressByEDCAKey
