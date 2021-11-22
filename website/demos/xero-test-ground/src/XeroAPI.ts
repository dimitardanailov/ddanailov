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
  Accounts,
  BankTransaction,
  BankTransactions,
} from 'xero-node'
import jwtDecode from 'jwt-decode'
const apiTokenSet = require('./tokenSet.json')
const fakeBankTrancations = require('./bank-transaction.json')
import fs from 'fs'

const promiseErrorResponse = function (error: Error, resolve: Function) {
  console.log(error)
  resolve([])
}

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

  getBankTransactions(page = 1) {
    const promise = new Promise(resolve => {
      const ifModifiedSince: Date = new Date('2000-01-01')
      const where = 'Status=="AUTHORISED"'
      const order = 'Type DESC'

      this.xero.accountingApi
        .getBankTransactions(
          this.activeTenantId,
          ifModifiedSince,
          where,
          order,
          page,
        )
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  getContacts() {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .getContacts(this.activeTenantId)
        .then(response => {
          resolve(response.body.contacts)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  getAccounts() {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .getAccounts(this.activeTenantId)
        .then(response => {
          resolve(response.body.accounts)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  async createFakeBankTransaction() {
    const contacts = <Array<Contacts>>await this.getContacts()
    if (!contacts) {
      console.log('contacts array is empty!')
      return
    }
    const accounts = <Array<Accounts>>await this.getAccounts()
    if (!accounts) {
      console.log('accounts array is empty!')
    }
    const contact: Contact = <Contact>contacts[0]
    const account: Account = <Account>accounts[0]

    const newBankTransaction: BankTransaction = {
      type: BankTransaction.TypeEnum.SPEND,
      contact: contact,
      bankAccount: account,
      date: '2019-09-19T00:00:00',
      isReconciled: true,
      lineItems: [],
    }

    const newBankTransactions: BankTransactions = new BankTransactions()
    newBankTransactions.bankTransactions = [newBankTransaction]
    const bankTransactionCreateResponse = await this.xero.accountingApi.createBankTransactions(
      this.activeTenantId,
      newBankTransactions,
      false,
    )

    try {
      const bankTransactionUpdateOrCreateResponse = await this.xero.accountingApi.updateOrCreateBankTransactions(
        this.activeTenantId,
        newBankTransactions,
        false,
      )

      console.log('success')
    } catch (e) {
      console.log('error')
    }

    // console.log(bankTransactionUpdateOrCreateResponse)

    // return bankTransactionCreateResponse
  }

  async createFakeBankAccount() {
    const account: Account = {
      name: 'DBS USD Account',
      type: AccountType.BANK,
    }

    try {
      const created1 = await this.xero.accountingApi.createAccount(
        this.activeTenantId,
        account,
      )

      console.log(created1)
    } catch (err) {
      console.error(err)
    }
  }

  async createFakeContacts() {
    try {
      const contact1: Contact = {
        name: 'NEM Group Limited',
      }
      const contact2: Contact = {
        name: 'Forbes Hare Trust Company Limited',
      }
      const contacts: Contacts = {
        contacts: [contact1, contact2],
      }
      const response = await this.xero.accountingApi.updateOrCreateContacts(
        this.activeTenantId,
        contacts,
      )
      console.log('contacts: ', response.body.contacts)
    } catch (err) {
      console.error(err)
    }
  }
}

export default XeroAPI
