require('dotenv').config()

import XeroAPI from './XeroAPI'
;(async () => {
  const api = new XeroAPI()
  await api.signIn()
  await api.getOrganizationInfo()

  // Step 1: create a fake contact
  // await api.createFakeContacts()

  // Step 2: create a fake bank account
  // await api.createFakeBankAccount()

  // Step 3: create a fake bank transaction
  // await api.createFakeBankTransaction()

  // Testing
  // await api.getContacts()
  // const accounts = await api.getBankAccounts()
  // console.log(accounts)

  const transactions = await api.getBankTransactions()
  console.log(transactions)

  // console.log(transactions)
  // console.log(transactions)

  // await api.createFakeContacts()
  // await api.createFakeBankAccount()

  // await api.getBankTransactions()
})()
