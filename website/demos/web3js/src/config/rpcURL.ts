import * as dotenv from 'dotenv'

dotenv.config()
const rpcURL = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`

export default rpcURL
