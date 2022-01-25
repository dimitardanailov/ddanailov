require('dotenv').config()

import algosdk, {ALGORAND_MIN_TX_FEE} from 'algosdk'
import BigNumber from 'bignumber.js'

declare var TextEncoder: any
declare var TextDecoder: any

const API_KEY = process.env.ALGO_API_KEY || ''

const port = ''
const token = {
  'x-api-key': API_KEY,
}

const ALGO_CLIENT_SERVER = process.env.ALGO_CLIENT_SERVER || ''
const ALGO_INDEXER_SERVER = process.env.ALGO_INDEXER_SERVER || ''

export async function getBalance(address: string): Promise<string> {
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

/**
 * @resource
 * https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupTransactionByID
 * @param {string} txHash
 */
export async function getTransaction(txHash: string) {
  const indexerClient = new algosdk.Indexer(token, ALGO_INDEXER_SERVER, port)
  try {
    const transaction = await indexerClient.lookupTransactionByID(txHash).do()

    return transaction
  } catch (err) {
    console.error('Algorand.getTransaction', err)
  }
}

export async function getTransactions(address: string) {
  const indexerClient = new algosdk.Indexer(token, ALGO_INDEXER_SERVER, port)
  try {
    const response = await indexerClient.lookupAccountTransactions(address).do()

    if ('transactions' in response) {
      let incomingTxns = response.transactions
        .filter((txn: any) => {
          const isValidTransaction =
            txn.sender.toLowerCase() !== address.toLowerCase() &&
            txn['confirmed-round'] !== null &&
            txn['confirmed-round'] > 0

          return isValidTransaction
        })
        .map((txn: any) => {
          return {
            hash: txn.id,
            source: txn.sender,
            destination: address,
            value: Number(txn['payment-transaction'].amount),
          }
        })

      return incomingTxns
    }
  } catch (err) {
    console.error('Algorand.getTransactions', err)
  }
}

export async function getGasFee() {
  return new BigNumber(ALGORAND_MIN_TX_FEE)
}

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
