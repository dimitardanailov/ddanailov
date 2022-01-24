import algosdk from 'algosdk'

const createAddress = () => {
  const account = algosdk.generateAccount()
  console.log('account', account.addr)

  // var secretKey = String.fromCharCode.apply(null, account.sk)
  // console.log('Secret key', secretKey)

  const mn = algosdk.secretKeyToMnemonic(account.sk)
  console.log('Account Mnemonic:', mn)
}

export default createAddress
