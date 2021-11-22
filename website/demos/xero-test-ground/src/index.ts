require('dotenv').config()

import XeroAPI from './XeroAPI'
;(async () => {
  const api = new XeroAPI()
  await api.signIn()
  await api.getOrganizationInfo()

  // Testing
  // await api.getContacts()
  // await api.createFakeContacts()

  await api.getBankTransactions()

  // await api.createFakeContacts()
  // await api.createFakeBankAccount()
  // await api.createFakeBankTransaction()

  // await api.getBankTransactions()
})()
