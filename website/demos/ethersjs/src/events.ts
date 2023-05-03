import {Contract} from 'ethers'

import provider from './config/providerConfig'
import data from './config/contractData'

import {getBlockNumber, printContractVersion} from './helpers'
;(async () => {
  const block = await getBlockNumber(provider)

  await loadOrganizationManagerEvents(block)
  await loadCertificationManagerEvents()
  loadElectricityTokenEvents()
})()

async function loadOrganizationManagerEvents(block: number) {
  const address = data.organizations.address
  const contract = new Contract(address, data.organizations.abi, provider)
  console.log(await contract.version())

  await printContractVersion(contract)
  const events = await contract.queryFilter(
    'OwnershipTransferred',
    block - 10000,
    block,
  )
  console.log('events', events)

  contract.on('*', resp => {
    console.log('response: ', resp)
  })

  console.log('OrganizationManager.filters:', contract.filters)
  console.log('------------')
}

async function loadCertificationManagerEvents() {
  const address = data.certification.address
  const contract = new Contract(address, data.certification.abi, provider)
  await printContractVersion(contract)

  contract.on('*', resp => {
    console.log('response: ', resp)
  })

  console.log('CertificationManager.filters:', contract.filters)
  console.log('')
}

async function loadElectricityTokenEvents() {
  const contract = new Contract(
    data.electricityCertificateToken.address,
    data.electricityCertificateToken.abi,
    provider,
  )
  await printContractVersion(contract)

  contract.on('*', resp => {
    console.log('response: ', resp)
  })

  console.log('ElectricityTokenEvents.filters:', contract.filters)
  console.log('')
}
