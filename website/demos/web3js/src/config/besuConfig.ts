import * as dotenv from 'dotenv'

dotenv.config()

const token = require('./token.json')

const besuConfig = {
  uri: process.env.BESU_URI,
  contractAbi: token,
  contractAddress: process.env.BESU_TOKEN_CONTRACT_ADDRESS,
}

export default besuConfig
