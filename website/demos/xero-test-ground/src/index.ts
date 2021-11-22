require('dotenv').config()

import XeroAPI from './XeroAPI'
;(async () => {
  const api = new XeroAPI()
  await api.signIn()
  await api.getOrganizationInfo()

  // Testing
  // await api.getContacts()
  // await api.createFakeContacts()

  const transactions = await api.getBankTransactions()
  console.log(transactions)

  // await api.createFakeContacts()
  // await api.createFakeBankAccount()
  // await api.createFakeBankTransaction()

  // await api.getBankTransactions()
})()
