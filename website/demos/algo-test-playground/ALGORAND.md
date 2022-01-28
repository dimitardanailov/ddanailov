### What elliptic curve is it using?

> Algorand uses Ed25519 high-speed, high-security elliptic-curve signatures.The
> keys are produced through standard, open-source cryptographic libraries
> packaged with each of the SDKs

### Is it supported by HPCS?

Yes

### Is it supported by Merkle Science?

The token doesn't have a direct suppor by Merkle Science. Algorand is supported
by BEP-20.

### What blockchain explorers are there?

- Mainnet:
  - https://algoexplorer.io/
  - https://algoscan.app/
  - https://goalseeker.purestake.io/algorand/mainnet
- Testnet:
  - https://testnet.algoexplorer.io/
  - https://goalseeker.purestake.io/algorand/testnet
- Beta:
  - https://betanet.algoexplorer.io/
  - https://goalseeker.purestake.io/algorand/betanet

* Are there APIs for querying balance?

Code snippet:

```javascript
async function getBalance(address: string): Promise<string> {
  const client = new algosdk.Algodv2(token, ALGO_INDEXER_SERVER, port)

  try {
    const accountInfo = await client.accountInformation(address).do()
    if ('account' in accountInfo) {
      return accountInfo.account.amount
    }
  } catch (err) {
    console.error('Algorand.getBalance.error', err)
  }

  return '0'
}
```

### Are there APIs for submitting transactions?

Code snippet

```javascript
/**
 * @resource
 * https://github.com/PureStake/api-examples/blob/master/javascript-examples/algod_submit_tx.js
 * https://developer.algorand.org/docs/sdks/javascript/#build-first-transaction
 */
export async function pureTransaction() {
  const regExp = new RegExp(/\,/, 'g')
  const mnemonic = 'final, equal, social, attack, chimney, spend, swear, civil, sad, jungle, dumb, assault, metal, feature, monitor, marriage, fly, depart, ill, shed, burger, census, swift, absent, garlic'.replace(
    regExp,
    '',
  )

  const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic)

  // Construct the transaction
  const client = new algosdk.Algodv2(token, ALGO_CLIENT_SERVER, port)
  let params = await client.getTransactionParams().do()
  // comment out the next two lines to use suggested fee
  // params.fee = 1000
  // params.flatFee = true

  const receiver = 'REYCTDA3AWAFPXTN5IEFFCA5LGCJN74RPKSJCFU3GTMZYXX2AWYJIZRGJY'
  const enc = new TextEncoder()
  const note = enc.encode('Algorand transaction')
  let amount = 1000000 // equals 1 ALGO
  let sender = recoveredAccount.addr
  let txn = algosdk.makePaymentTxnWithSuggestedParams(
    sender,
    receiver,
    amount,
    undefined,
    note,
    params,
  )

  let signedTxn = txn.signTxn(recoveredAccount.sk)
  let txId = txn.txID().toString()
  console.log('Signed transaction with txID: %s', txId)

  // Submit the transaction
  await client.sendRawTransaction(signedTxn).do()

  // Wait for confirmation
  let confirmedTxn = await waitForConfirmation(client, txId, 4)
  //Get the completed Transaction
  console.log(
    'Transaction ' +
      txId +
      ' confirmed in round ' +
      confirmedTxn['confirmed-round'],
  )
  var string = new TextDecoder().decode(confirmedTxn.txn.txn.note)
  console.log('Note field: ', string)
  const accountInfo = await client
    .accountInformation(recoveredAccount.addr)
    .do()
  console.log('Transaction Amount: %d microAlgos', confirmedTxn.txn.txn.amt)
  console.log('Transaction Fee: %d microAlgos', confirmedTxn.txn.txn.fee)
  console.log('Account balance: %d microAlgos', accountInfo.amount)
}

/**
 * Wait until the transaction is confirmed or rejected, or until 'timeout'
 * number of rounds have passed.
 * @param {algosdk.Algodv2} algodClient the Algod V2 client
 * @param {string} txId the transaction ID to wait for
 * @param {number} timeout maximum number of rounds to wait
 * @return {Promise<*>} pending transaction information
 * @throws Throws an error if the transaction is not confirmed or rejected in the next timeout rounds
 */
const waitForConfirmation = async function (
  algodClient: any,
  txId: string,
  timeout: number,
) {
  if (algodClient == null || txId == null || timeout < 0) {
    throw new Error('Bad arguments')
  }

  const status = await algodClient.status().do()
  if (status === undefined) {
    throw new Error('Unable to get node status')
  }

  const startround = status['last-round'] + 1
  let currentround = startround

  while (currentround < startround + timeout) {
    const pendingInfo = await algodClient
      .pendingTransactionInformation(txId)
      .do()
    if (pendingInfo !== undefined) {
      if (
        pendingInfo['confirmed-round'] !== null &&
        pendingInfo['confirmed-round'] > 0
      ) {
        //Got the completed Transaction
        return pendingInfo
      } else {
        if (
          pendingInfo['pool-error'] != null &&
          pendingInfo['pool-error'].length > 0
        ) {
          // If there was a pool error, then the transaction has been rejected!
          throw new Error(
            'Transaction ' +
              txId +
              ' rejected - pool error: ' +
              pendingInfo['pool-error'],
          )
        }
      }
    }
    await algodClient.statusAfterBlock(currentround).do()
    currentround++
  }
  throw new Error(
    'Transaction ' + txId + ' not confirmed after ' + timeout + ' rounds!',
  )
}
```

### Are there APIs for querying expected transaction fees?

Code snippet:

```javascript
const suggestedParams = await algodClient.getTransactionParams().do()
const amountInMicroAlgos = algosdk.algosToMicroalgos(2) // 2 Algos
const unsignedTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  from: senderAddress,
  to: receiverAddress,
  amount: amountInMicroAlgos,
  suggestedParams: suggestedParams,
})
```

### How do we get Testnet tokens?

Faucet networks are:

- https://bank.testnet.algorand.network/
- https://dispenser.testnet.aws.algodev.network/

### Can it create an issuance?

Yes

### Can it mint new tokens?

Yes

### Can it burn tokens?(redemption)

Yes

### Can it lock and unlock tokens?

> ALGO itself can never be locked - just optionally on assets people create
> (clawback / freeze are configurable options at asset creation time).

### Can it burn another party’s tokens?(recovery)

Yes

### Can it record data(poll)

Yes
