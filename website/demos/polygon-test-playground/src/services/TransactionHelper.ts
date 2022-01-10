import {ethers} from 'ethers'
import BN from 'bn.js'
import {getNetworkConfig} from '../configurations/testnet'

const {TransactionFactory} = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default

export default class TransactionHelper {
  private provider: ethers.providers.JsonRpcProvider
  private chainId: number
  private networkUrl: string

  constructor() {
    const {httpProvider, chainId} = getNetworkConfig()
    this.provider = new ethers.providers.JsonRpcProvider(httpProvider, chainId)
    this.chainId = chainId
    this.networkUrl = httpProvider
  }

  /**
   * Build a raw transaction to be executed
   *
   * NOTE: This function fetches nonce from the blockchain and hence
   *       might fail, if one tries to submit multiple transactions
   *       within a single blockspace
   */
  async buildRawTransaction(
    fromAddress: string,
    toAddress: string,
    gasLimit: BN,
    gasPriceGwei: BN,
    amountWei: string,
    txData: string,
    nonce?: number,
  ) {
    if (!nonce) {
      nonce = await this.getTransactionCount(fromAddress)
    }
    const common = Common.custom({
      chainId: this.chainId,
      networkId: this.chainId,
      url: this.networkUrl,
    })

    const rawTransaction = TransactionFactory.fromTxData(
      {
        type: 0,
        nonce,
        gasPrice: gasPriceGwei,
        gasLimit: gasLimit,
        to: toAddress,
        value: new BN(amountWei),
        data: txData,
        chainId: this.chainId,
      },
      {
        common,
      },
    )

    return rawTransaction
  }

  async broadcastTransaction(signedTransaction: string) {
    const {hash} = await this.provider.sendTransaction(signedTransaction)
    return hash
  }

  async getRecommendedFee() {
    const fee = await this.provider.getGasPrice()

    return fee
  }

  async estimateGas(
    fromAddress: string,
    toAddress: string,
    amountGWei: string,
    txData: string,
  ) {
    const gasLimit = await this.provider.estimateGas({
      from: fromAddress,
      to: toAddress,
      value: amountGWei,
      data: txData,
    })

    return gasLimit
  }

  async getTransactionCount(address: string) {
    const count = this.provider.getTransactionCount(address)

    return count
  }
}
