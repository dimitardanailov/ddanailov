require('dotenv').config()

const {v4: uuidv4} = require('uuid')

import {
  Account,
  BankTransaction,
  BankTransactions,
  HistoryRecord,
} from 'xero-node'
import XeroAPI from './XeroAPI'

const xero = new XeroAPI()

;(async () => {
  await xero.signIn()
  await xero.getOrganizationInfo()

  const url = await xero.buildConsentUrl()
  console.log(url)

  // Step 1: create a fake contact
  // await xero.createFakeContacts()

  // Step 2: create a fake bank account
  // await xero.createFakeBankAccount()

  // Step 3: create a fake bank transaction
  const isReconciled = true
  /*
  const params = await generateFakeTransactionParams(isReconciled)
  await xero.createFakeBankTransaction(
    params.reference,
    params.account,
    params.isReconciled,
    params.total,
  ) */

  // Testing
  // await xero.getContacts()
  // const accounts = await xero.getBankAccounts()
  // console.log(accounts)

  console.info('getBankTransactions ....')
  const xeroTransactions = <Array<BankTransaction>>(
    await xero.getBankTransactions()
  )
  console.log(xeroTransactions[0])
  const transactions = xero.extractBankTransactions(xeroTransactions)
  console.log(transactions)
  process.exit(0)

  console.info('getBankTransaction ....')
  const xeroTransactionId = transactions[0]['id']!
  const xeroTransaction = <Array<BankTransaction>>(
    await xero.getBankTransaction(xeroTransactionId)
  )
  const transaction = xero.extractBankTransactions(xeroTransaction)
  const historyRecords = <Array<HistoryRecord>>(
    await xero.getBankTransactionHistoryRecords(xeroTransactionId)
  )
  console.log(transaction[0], historyRecords)
  const filteredRecords = xero.filterBankTransactionHistoryRecords(
    historyRecords,
  )
  console.log(filteredRecords)

  console.log('Add a note ....')
  const rawAccounts = <Array<Account>>await xero.getBankAccounts()
  const accounts = xero.extractBankAccounts(rawAccounts)
  console.log('accounts', accounts)
  // await xero.createBankTransactionHistoryRecord(xeroTransactionId, 'Note')
  // await xero.updateTransaction(transaction['id'], null)

  await updateTransaction(xeroTransactionId)
  /*
  const transaction = xero.extractBankTransaction(xeroTransaction) */
  // console.log(transactions)
  // console.log(transactions)

  // await xero.createFakeContacts()
  // await xero.createFakeBankAccount()

  // await xero.getBankTransactions()
})()

async function generateFakeTransactionParams(isReconciled: boolean) {
  const accounts = <Array<Account>>await xero.getBankAccounts()
  if (!accounts) {
    console.log('accounts array is empty!')
    throw 'accounts array is empty!'
  }

  const account = accounts[Math.floor(Math.random() * accounts.length)]

  const params = {
    reference: uuidv4(),
    account,
    isReconciled,
    total: 20,
  }

  return params
}

async function updateTransaction(xeroTransactionId: string) {
  const xeroTransactions = <Array<BankTransaction>>(
    await xero.getBankTransaction(xeroTransactionId)
  )
  if (xeroTransactions.length === 0) {
    return
  }

  const xeroTransaction: BankTransaction = xeroTransactions[0]
  const bankTransaction: BankTransaction = {
    type: BankTransaction.TypeEnum.RECEIVE,
    lineItems: xeroTransaction.lineItems,
    bankAccount: xeroTransaction.bankAccount,
    isReconciled: false,
    reference: 'd8e88682-7114-4739-adef-a4872a6b7b38',
  }

  const bankTransactions: BankTransactions = {
    bankTransactions: [bankTransaction],
  }

  const response: any = await xero.updateBankTransaction(
    xeroTransactionId,
    bankTransactions,
  )

  console.log('response', response)
  // console.log('response', Object.keys(response.response.request.body))
  // console.log(response.request.response.body.Elements[0])
}
