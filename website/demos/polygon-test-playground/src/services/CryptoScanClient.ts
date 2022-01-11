import axios from 'axios'

export default class CryptoScanClient {
  private client: any

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
    })
  }

  async getDepositTransactions(walletAddress: string, apiKey: string) {
    const url = `/api?module=account&action=txlist&address=${walletAddress}&tag=latest&apikey=${apiKey}`
    const {data} = await this.client.get(url)
    if (data.message !== 'OK') {
      return []
    }

    return this.filterTransaction(walletAddress, data.result)
  }

  private filterTransaction(
    walletAddress: string,
    txnList: Array<any>,
  ): Array<any> {
    let incomingTxns = txnList.filter(
      txn =>
        txn.to.toLowerCase() === walletAddress.toLowerCase() &&
        txn.from.toLowerCase() !== walletAddress.toLowerCase() &&
        Number(txn.confirmations) > 15,
    )
    incomingTxns = incomingTxns.map(txn => {
      return {
        hash: txn.hash,
        source: txn.from,
        destination: txn.to,
        value: Number(txn.value),
      }
    })
    return incomingTxns
  }
}
