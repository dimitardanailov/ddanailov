require('dotenv').config()

import XeroAPI from './XeroAPI'
;(async () => {
  const api = new XeroAPI()
  await api.signIn()
  await api.getOrganizationInfo()

  await api.getBankTransactions()
  // await api.getBankTransactions()
})()
