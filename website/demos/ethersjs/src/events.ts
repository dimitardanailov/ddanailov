import {Contract} from 'ethers'

import provider from './config/providerConfig'
import data from './config/contractData'

import {getBlockNumber, printContractVersion} from './helpers'
import loadOrganizationManagerEvents from './_organizationManager'
import loadCertificationManagerEvents from './_certificationManagerEvents'
import loadElectricityTokenEvents from './_electricityTokenEvents'
;(async () => {
  const block = await getBlockNumber(provider)

  await loadOrganizationManagerEvents(block)
  await loadCertificationManagerEvents(block)
  await loadElectricityTokenEvents(block)
})()
