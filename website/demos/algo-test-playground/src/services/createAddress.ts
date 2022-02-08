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
  console.log(
    'account.addr',
    account.addr,
    algosdk.isValidAddress(account.addr),
  )
  console.log('address', address, algosdk.isValidAddress(address))
  console.log('public key', publicKey)
  console.log('checksum', checksum)

  return {
    address: account.addr,
    publicKey: publicKey,
  }
}

const createAddressWithPublickKey = () => {
  const publicKey =
    '8ffc6992d34db8016f284fb2d84f5c5c38fb9c9ef523d92c2d54f76ce91f3857'

  const pubKeyArray: Uint8Array = Uint8Array.from(Buffer.from(publicKey, 'hex'))
  const address = algosdk.encodeAddress(pubKeyArray)

  console.log('address', address, algosdk.isValidAddress(address))
}

export default createAddressWithPublickKey
