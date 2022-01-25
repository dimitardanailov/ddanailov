import {getTransactions} from './services/algorand'
;(async () => {
  const address1 = 'NNLTQS4O6OTH3AUZ7CIIQ5HYWVWSK7ZF3GHHMIKRDECCKQ2NNRLFUE4OVU'
  const transactions = await getTransactions(address1)

  console.log(transactions)
})()
