import algosdk from 'algosdk'

declare var TextEncoder: any
declare var TextDecoder: any

const createAddress = () => {
  const account = algosdk.generateAccount()
  const mn = algosdk.secretKeyToMnemonic(account.sk)
  console.log('Account Mnemonic:', mn)

  console.log('account', account)

  const {publicKey, checksum} = algosdk.decodeAddress(account.addr)
  const address = algosdk.encodeAddress(publicKey)
  console.log('account.addr === address', account.addr === address)
  console.log('account.addr', account.addr)
  console.log('address', address)
  console.log('public key', publicKey)
  console.log('checksum', checksum)

  const buffer = Buffer.from(publicKey)
  const pubKeyBase64: string = buffer.toString('base64')
  const pubKeyArray: Uint8Array = Buffer.from(pubKeyBase64, 'base64')
  const addr = algosdk.encodeAddress(pubKeyArray)
  console.log('addr', addr)

  return {
    address: account.addr,
  }
}

export default createAddress
