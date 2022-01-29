import algosdk from 'algosdk'

const createAddress = () => {
  const account = algosdk.generateAccount()
  const mn = algosdk.secretKeyToMnemonic(account.sk)
  console.log('Account Mnemonic:', mn)

  console.log('account', account)

  const {publicKey, checksum} = algosdk.decodeAddress(account.addr)

  const buffer = Buffer.from(publicKey)
  const pubKeyBase64: string = buffer.toString('base64')
  const pubKeyArray: Uint8Array = Buffer.from(pubKeyBase64, 'base64')
  const address = algosdk.encodeAddress(pubKeyArray)
  console.log('account.addr === address', account.addr === address)
  console.log('account.addr', account.addr)
  console.log('address', address)
  console.log('public key', publicKey)
  console.log('checksum', checksum)

  return {
    address: account.addr,
    publicKey: publicKey,
  }
}

export default createAddress
