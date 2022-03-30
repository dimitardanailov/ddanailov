import AtomService from './services/AtomService'
const service = new AtomService()

;(async () => {
  // testnet
  const address1 = 'cosmos1yzw26p8rnndsrsuddpymkyq5addgwy7tay8enu'
  debugTransactions(address1)

  // testnet
  const address2 = 'cosmos15aptdqmm7ddgtcrjvc5hs988rlrkze40l4q0he'
  debugTransactions(address2)

  // testnet
  const address3 = 'cosmos10v6wvdenee8r9l6wlsphcgur2ltl8ztkvhc8fw'
  debugTransactions(address3)
})()

async function debugTransactions(address: string) {
  const transactions = await service.getTransactions(address)
  console.log('address', address)
  console.log('number of transactions', transactions.length)
  console.log('transactions', transactions)
  console.log('-------------End-----------------')
}
