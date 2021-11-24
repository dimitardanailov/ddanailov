require('dotenv').config()

import {BankTransaction, BankTransactions} from 'xero-node'
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
  // await xero.createFakeBankTransaction()

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

  console.info('getBankTransaction ....')
  const xeroTransactionId = transactions[0]['id']!
  const xeroTransaction = <Array<BankTransaction>>(
    await xero.getBankTransaction(xeroTransactionId)
  )
  const transaction = xero.extractBankTransactions(xeroTransaction)
  console.log(xeroTransactionId)

  console.log('Update a transaction ....')
  await updateTransaction(xeroTransactionId)

  // await xero.updateTransaction(transaction['id'], null)

  /*
  const transaction = xero.extractBankTransaction(xeroTransaction) */
  // console.log(transactions)
  // console.log(transactions)

  // await xero.createFakeContacts()
  // await xero.createFakeBankAccount()

  // await xero.getBankTransactions()
})()

async function updateTransaction(xeroTransactionId: string) {
  const xeroTransactions = <Array<BankTransaction>>(
    await xero.getBankTransaction(xeroTransactionId)
  )
  if (xeroTransactions.length === 0) {
    return
  }

  const xeroTransaction: BankTransaction = xeroTransactions[0]
  const bankTransaction: BankTransaction = {
    type: BankTransaction.TypeEnum.SPEND,
    lineItems: xeroTransaction.lineItems,
    bankAccount: xeroTransaction.bankAccount,
    isReconciled: false,
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
