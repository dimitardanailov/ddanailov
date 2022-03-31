import {DirectSecp256k1HdWallet, OfflineSigner} from '@cosmjs/proto-signing'
import {
  assertIsDeliverTxSuccess,
  SigningStargateClient,
  StdFee,
  calculateFee,
  GasPrice,
  coins,
} from '@cosmjs/stargate'
;(async () => {
  const wallet = await createAddress()
  await sendTransaction(wallet)
})()

async function createAddress(): Promise<OfflineSigner> {
  const mnemonic =
    'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put'
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)

  return wallet
}

async function sendTransaction(wallet: OfflineSigner) {
  const rpcEndpoint = 'https://rpc.sentry-01.theta-testnet.polypore.xyz'
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
  )

  const recipient = 'cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5'
  const amount = coins(7890, 'uatom')

  const [firstAccount] = await wallet.getAccounts()

  const defaultGasPrice = GasPrice.fromString('0.025uatom')
  const defaultSendFee: StdFee = calculateFee(80_000, defaultGasPrice)

  console.log('sender', firstAccount.address)
  console.log('transactionFee', defaultSendFee)
  console.log('amount', amount)

  const transaction = await client.sendTokens(
    firstAccount.address,
    recipient,
    amount,
    defaultSendFee,
    'Transaction',
  )
  assertIsDeliverTxSuccess(transaction)
  console.log('Successfully broadcasted:', transaction)
}
