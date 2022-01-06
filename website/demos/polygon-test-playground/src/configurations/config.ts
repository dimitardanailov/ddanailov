/**
 * https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask#polygon-scan
 */

const config = {
  network: {
    testnet: {
      httpProvider: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      blocksscanUrl: 'https://mumbai.polygonscan.com',
      apiURL: '',
    },
    mainnet: {
      httpProvider: '',
      chainId: 137,
      blocksscanUrl: '',
      apiURL: '',
    },
  },
}

export default config
