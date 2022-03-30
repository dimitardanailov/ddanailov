import AtomService from './services/AtomService'
;(async () => {
  const service = new AtomService()

  const address1 = 'cosmos1yzw26p8rnndsrsuddpymkyq5addgwy7tay8enu'
  const balance1 = await service.getBalance(address1)
  printResult(address1, balance1, 'testnet')

  const address2 = 'cosmos15aptdqmm7ddgtcrjvc5hs988rlrkze40l4q0he'
  const balance2 = await service.getBalance(address2)
  printResult(address2, balance2, 'testnet')

  const address3 = 'cosmos1cxklfwgwd80zskga7uv9245hjmnmwa6u6zuklu'
  const balance3 = await service.getBalance(address3)
  printResult(address3, balance3, 'mainnet')
})()

function printResult(address: string, balance: string, type: string) {
  const response = `{address:} -> ${address} | {balance:} -> ${balance} | {type:} -> ${type}`
  console.log(response)
}
