const {TransactionFactory} = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const {Hardfork} = require('@ethereumjs/common')
const BN = require('bn.js')
const {ethers} = require('ethers')
const elliptic = require('elliptic')
const ec = new elliptic.ec('secp256k1')
const sha256 = require('js-sha256')

const fromAddressPrivKey =
  'f6d6b4f111ead8937250dc64c12f7c5ef39c8e664a664477fb962c0fba631098'

async function test(
  chainId = 80001,
  toAddress = '0x5241d2a90CB8A459b6a209E5D0C2a66842F9916C',
  txData = '0x',
) {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rpc-mumbai.maticvigil.com',
    chainId,
  )
  const fromAddress = ethers.utils.computeAddress(
    Buffer.from(fromAddressPrivKey, 'hex'),
  )
  const nonce = await provider.getTransactionCount(fromAddress)
  console.log(nonce)

  const common = Common.custom({
    chainId,
    networkId: chainId,
    name: 'Mumbai Testnet',
  })
  const rawTransaction = TransactionFactory.fromTxData(
    {
      type: 0,
      nonce,
      gasPrice: 10_000_000_000,
      gasLimit: 21_000,
      to: toAddress,
      value: new BN(10),
      data: txData,
      chainId,
    },
    {
      common,
    },
  )
  console.log('rawTx: ', rawTransaction)

  const signingMessage = rawTransaction.getMessageToSign().toString('hex')
  let privKey = ec.keyFromPrivate(fromAddressPrivKey, 'hex')
  let signature = ec.sign(signingMessage, privKey, 'hex', {
    canonical: true,
  })

  const signedTx = ethers.utils.serializeTransaction(
    {
      nonce,
      gasPrice: 10_000_000_000,
      gasLimit: ethers.BigNumber.from(21_000),
      to: toAddress,
      value: ethers.BigNumber.from(10),
      data: txData,
      chainId,
    },
    {
      r: '0x' + signature.r.toString('hex'),
      s: '0x' + signature.s.toString('hex'),
      recoveryParam: signature.recoveryParam,
    },
  )
  console.log(signedTx)

  const response = await provider.sendTransaction(signedTx)
  console.log(response)
}

test()
