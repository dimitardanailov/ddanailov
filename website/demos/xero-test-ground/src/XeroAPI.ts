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
import fs from 'fs'

const path = __dirname.replace('/src', '')
const env = process.env.NODE_ENV
const tokenPath = `${path}/xero-tokens/${env}-tokenSet.json`
const apiTokenSet = require(tokenPath)

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
      fs.writeFile(tokenPath, data, err => {
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
          resolve(response.body.bankTransactions)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  extractBankTransactions(xeroTransactions: Array<BankTransaction>) {
    const extractBankTransaction = this.extractBankTransaction
    const transactions = xeroTransactions.map(function (
      xeroTransaction: BankTransaction,
    ) {
      return extractBankTransaction(xeroTransaction)
    })

    return transactions
  }

  extractBankTransaction(xeroTransaction: BankTransaction) {
    const contact = {
      id: xeroTransaction.contact?.contactID,
      name: xeroTransaction.contact?.name,
    }
    const bankAccount = {
      id: xeroTransaction.bankAccount.accountID,
      name: xeroTransaction.bankAccount.name,
    }

    return {
      contact,
      bankAccount,
      id: xeroTransaction.bankTransactionID,
      total: xeroTransaction.total,
      totalTax: xeroTransaction.totalTax,
      subTotal: xeroTransaction.subTotal,
      type: xeroTransaction.type,
      status: xeroTransaction.status,
      currency: xeroTransaction.currencyCode,
      date: xeroTransaction.date,
      updatedDateUTC: xeroTransaction.updatedDateUTC,
      reference: xeroTransaction.reference,
      isReconciled: xeroTransaction.isReconciled,
    }
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

  getBankAccounts() {
    const ifModifiedSince: Date = new Date('2000-01-01')
    const where =
      'Status=="' +
      Account.StatusEnum.ACTIVE +
      '" AND Type=="' +
      Account.BankAccountTypeEnum.BANK +
      '"'

    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .getAccounts(this.activeTenantId, ifModifiedSince, where)
        .then(response => {
          resolve(response.body.accounts)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  createBankTransaction(newBankTransaction: BankTransaction) {
    const newBankTransactions: BankTransactions = new BankTransactions()
    newBankTransactions.bankTransactions = [newBankTransaction]

    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .createBankTransactions(this.activeTenantId, newBankTransactions, false)
        .then(response => {
          resolve(response.body.bankTransactions)
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
    const accounts = <Array<Accounts>>await this.getBankAccounts()
    if (!accounts) {
      console.log('accounts array is empty!')
      return
    }
    const contact: Contact = <Contact>contacts[0]
    const account: Account = <Account>accounts[0]

    const useContact: Contact = {
      contactID: contact.contactID,
    }

    const useBankAccount: Account = {
      accountID: account.accountID,
    }

    const lineItems: LineItem[] = [
      {
        description: 'consulting',
        quantity: 1.0,
        unitAmount: 20.0,
        accountCode: '260',
      },
    ]

    const newBankTransaction: BankTransaction = {
      type: BankTransaction.TypeEnum.RECEIVE,
      contact: useContact,
      lineItems: lineItems,
      bankAccount: useBankAccount,
      total: 20,
    }

    const transactions = <Array<BankTransactions>>(
      await this.createBankTransaction(newBankTransaction)
    )

    console.log(transactions[0])
  }

  createBankAccount(account: Account) {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .createAccount(this.activeTenantId, account)
        .then(response => {
          resolve(response.body)
        })
        .catch(e => {
          console.log(e.response.request.response.body.Elements[0])
          resolve(e)
        })
    })

    return promise
  }

  async createFakeBankAccount() {
    const getRandomNumber = function (range: number) {
      return Math.round(Math.random() * ((range || 100) - 1) + 1)
    }

    const account: Account = {
      name: 'DBS USD Account',
      type: AccountType.BANK,
      bankAccountNumber: getRandomNumber(209087654321050).toString(),
    }

    const response: any = await this.createBankAccount(account)
    console.log(response)
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
