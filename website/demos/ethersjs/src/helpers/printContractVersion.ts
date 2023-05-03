import {Contract} from 'ethers'

async function printContractVersion(contract: Contract) {
  const version = await contract.version()
  console.log('Version:', version)
  console.log('')
}

export default printContractVersion
