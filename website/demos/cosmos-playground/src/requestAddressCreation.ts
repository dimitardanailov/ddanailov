import AtomService from './services/AtomService'
import {
  DirectSecp256k1HdWallet,
  decodePubkey,
  encodePubkey,
} from '@cosmjs/proto-signing'
import {
  rawSecp256k1PubkeyToRawAddress,
  rawEd25519PubkeyToRawAddress,
  isSecp256k1Pubkey,
  Pubkey,
  pubkeyToAddress,
} from '@cosmjs/amino'
import {ripemd160, sha256} from '@cosmjs/crypto'
import {fromBase64, toBech32} from '@cosmjs/encoding'
import customPubkeyToAddress from './services/customPubkeyToAddress'

import elliptic from 'elliptic'
const secp256k1 = new elliptic.ec('secp256k1')

;(async () => {
  const pubkey = {
    type: 'tendermint/PubKeySecp256k1',
    value: 'AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP',
  }

  const address = pubkeyToAddress(pubkey, 'cosmos')
  // cosmos1h806c7khnvmjlywdrkdgk2vrayy2mmvf9rxk2r
  console.log(address)
  console.log('----')
  console.log(customPubkeyToAddress(pubkey))
  console.log('----')

  createCosmosAddressByEd25519Key()

  const EDCAKey =
    '04068ae3cc66d3a9ef317c0bf7ead9d3474b64910a117df2860b8211ffc5e895f960a5d5211f23552f02dd07496ceb8d1234fc61c35e7217e361b94c80cfeb2916'

  const service = new AtomService()
  console.log('bench32Format', createCosmosAddressByEDCAKey(EDCAKey))
  console.log(
    'service.create address ->',
    await service.requestAddressCreation(),
  )
})()

function createCosmosAddressByEd25519Key() {
  const pubKeyArray: Uint8Array = Uint8Array.from(
    Buffer.from(
      'c26fae31d71c3f235583012d1928570f2918fc54e05abc89209c59c94d3d615d',
      'hex',
    ),
  )

  const key = rawEd25519PubkeyToRawAddress(pubKeyArray)
  const bench32Format = toBech32('cosmos', key)
  console.log('bench32Format', bench32Format)
}

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

async function createAddressByPrivateKey() {
  const mnemonic =
    'ivory uniform actual spot floor vessel monster rose yellow noise smile odor veteran human reason miss stadium phrase assault puzzle sentence approve coral apology'
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)
  const accounts = await wallet.getAccounts()
  const account = accounts[0]
  console.log('account', account)
}
