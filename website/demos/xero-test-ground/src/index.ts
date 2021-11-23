require('dotenv').config()

import {BankTransaction} from 'xero-node'
import XeroAPI from './XeroAPI'
;(async () => {
  const xero = new XeroAPI()
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
  console.log(transaction[0])

  /*
  const transaction = xero.extractBankTransaction(xeroTransaction) */
  // console.log(transactions)
  // console.log(transactions)

  // await xero.createFakeContacts()
  // await xero.createFakeBankAccount()

  // await xero.getBankTransactions()
})()
