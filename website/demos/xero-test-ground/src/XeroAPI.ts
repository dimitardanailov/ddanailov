/**
 * @format
 */
import {TokenSet} from 'openid-client'
import {
  XeroAccessToken,
  XeroIdToken,
  XeroClient,
  Contact,
  LineItem,
  Invoice,
  Invoices,
  Phone,
  Contacts,
  Account,
  AccountType,
} from 'xero-node'
import jwtDecode from 'jwt-decode'
const apiTokenSet = require('./tokenSet.json')
import fs from 'fs'

class XeroAPI {
  public xero: XeroClient

  public clientId: string = ''
  public clientSecret: string = ''
  public redirectUrl: string = ''
  public activeTenantId: string = ''

  constructor() {
    this.clientId = process.env.XERO_CLIENT_ID || ''
    this.clientSecret = process.env.XERO_CLIENT_SECRET || ''
    this.redirectUrl = process.env.XERO_REDIRECT_URI || ''
    const scopes: string =
      'openid profile email accounting.settings accounting.reports.read accounting.journals.read accounting.contacts accounting.attachments accounting.transactions offline_access'

    this.xero = new XeroClient({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      redirectUris: [this.redirectUrl],
      scopes: scopes.split(' '),
    })
  }

  async signIn() {
    const tokenSet: TokenSet = new TokenSet(apiTokenSet)

    await this.xero.initialize()
    await this.xero.setTokenSet(tokenSet)
    if (tokenSet.expired()) {
      const validTokenSet = await this.xero.refreshToken()
      let data = JSON.stringify(validTokenSet, null, 2)
      fs.writeFile('./src/tokenSet.json', data, err => {
        if (err) throw err
        console.log('Data written to file')
      })
    }

    await this.xero.updateTenants()

    this.activeTenantId = this.xero.tenants[0].tenantId
  }

  async getOrganizationInfo() {
    try {
      const response: any = await this.xero.accountingApi.getOrganisations(
        this.activeTenantId,
      )
      console.log(
        `Hello, ${response.body.organisations[0].name} -> ${this.activeTenantId}`,
      )
    } catch (e) {
      console.log(e)
    }
  }

  async getBankTransactions() {
    try {
      const response = await this.xero.accountingApi.getBankTransactions(
        this.activeTenantId,
      )

      console.log(response.body || response.response.statusCode)
    } catch (err) {
      console.error(err)
    }
  }
}

export default XeroAPI
