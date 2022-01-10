const {TransactionFactory} = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const {Hardfork} = require('@ethereumjs/common')
const BN = require('bn.js')
const {ethers} = require('ethers')
const elliptic = require('elliptic')
const ec = new elliptic.ec('secp256k1')
const sha256 = require('js-sha256')

const fromAddressPrivKey =
  '8910766d9681b70ba05a0c81d6cfab31a51f5d714ac28b353da1242eb715923f'

async function test(
  chainId = 97,
  toAddress = '0x28985676bb58bBd7683C60AC92E00002ea515AB2',
  txData = '0x',
) {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://data-seed-prebsc-1-s1.binance.org:8545/',
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
    name: 'Binance Testnet',
  })
  const rawTransaction = TransactionFactory.fromTxData(
    {
      type: 0,
      nonce,
      gasPrice: 10_000_000_000,
      gasLimit: 21_000,
      to: toAddress,
      value: new BN(1),
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
      value: ethers.BigNumber.from(1),
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
