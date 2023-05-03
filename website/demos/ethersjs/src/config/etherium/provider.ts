import {JsonRpcProvider} from 'ethers'
import rpcURL from './rpcURL'

const jsonProvider = new JsonRpcProvider(rpcURL)

export default jsonProvider
