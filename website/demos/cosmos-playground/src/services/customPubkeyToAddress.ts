// https://github.com/cosmos/cosmjs/blob/1e11948c07/packages/amino/src/addresses.ts#L37

import {Pubkey, isSecp256k1Pubkey} from '@cosmjs/amino'
import {fromBase64, toBech32} from '@cosmjs/encoding'
import {ripemd160, sha256} from '@cosmjs/crypto'

function rawSecp256k1PubkeyToRawAddress(pubkeyData: Uint8Array): Uint8Array {
  if (pubkeyData.length !== 33) {
    throw new Error(
      `Invalid Secp256k1 pubkey length (compressed): ${pubkeyData.length}`,
    )
  }
  return ripemd160(sha256(pubkeyData))
}

function customPubkeyToAddress(pubkey: Pubkey): any {
  if (!isSecp256k1Pubkey(pubkey)) {
    throw new Error('Unsupported public key type')
  }

  const prefix = 'cosmos'
  const value = pubkey.value
  const pubkeyData = fromBase64(value)
  const rawAddress = rawSecp256k1PubkeyToRawAddress(pubkeyData)
  const bench32Format = toBech32(prefix, rawAddress)

  return bench32Format
}

export default customPubkeyToAddress
