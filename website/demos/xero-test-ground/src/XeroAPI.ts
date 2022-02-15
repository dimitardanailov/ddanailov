/**
 * @format
 */
import {TokenSet} from 'openid-client'
import {
  XeroClient,
  Contact,
  LineItem,
  Contacts,
  Account,
  AccountType,
  Accounts,
  BankTransaction,
  BankTransactions,
  HistoryRecord,
  HistoryRecords,
} from 'xero-node'
import fs from 'fs'
import {uploadFile, downloadToken} from './aws'

const {tokenPath} = require('./apiTokenSet')

const promiseErrorResponse = function (error: any, resolve: Function) {
  const json = JSON.stringify(error.response.body, null, 2)
  console.log(json)
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

  async buildConsentUrl() {
    const url = await this.xero.buildConsentUrl()

    return url
  }

  async createTokenSet(requestUrl: string) {
    const tokenSet = await this.xero.apiCallback(requestUrl)
    this.updateTokenSet(tokenSet)

    return tokenSet
  }

  async signIn() {
    try {
      const awsToken: string = await downloadToken()

      const apiTokenSet = JSON.parse(awsToken)

      const tokenSet: TokenSet = new TokenSet(apiTokenSet)

      await this.xero.initialize()
      await this.xero.setTokenSet(tokenSet)

      if (tokenSet.expired()) {
        console.log('Create a new token')
        const validTokenSet = await this.xero.refreshToken()
        await this.updateTokenSet(validTokenSet)
      }

      await this.xero.updateTenants()

      this.activeTenantId = this.xero.tenants[0].tenantId
    } catch (err) {
      console.log(err)
      return
    }
  }

  async updateTokenSet(validTokenSet: object) {
    let data = JSON.stringify(validTokenSet, null, 2)
    fs.writeFile(tokenPath, data, err => {
      if (err) {
        throw err
      }

      console.log('Data written to file')

      uploadFile(tokenPath)
        .then(() => {
          console.log('Data written to amazon s3')
        })
        .catch(err => {
          console.error('amazon s3 upload -> error', err)
        })
    })
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

  getBankTransaction(transactionId: string) {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .getBankTransaction(this.activeTenantId, transactionId)
        .then(response => {
          resolve(response.body.bankTransactions)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  getBankTransactions(page = 1) {
    const promise = new Promise(resolve => {
      const ifModifiedSince: Date = new Date('2021-11-28')
      const where = 'Status=="AUTHORISED" and Reference != ""'
      const order = 'Date DESC'

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

  getBankTransactionsByReferenceCode(referenceCode: string, page = 1) {
    const promise = new Promise(resolve => {
      const ifModifiedSince: Date = new Date('2021-11-28')
      const where = `Status=="AUTHORISED" and Reference =="${referenceCode}"`
      const order = 'Date DESC'

      console.log('where', where)

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

  async deleteItem(itemID: string) {
    try {
      const response = await this.xero.accountingApi.deleteItem(
        this.activeTenantId,
        itemID,
      )
      console.log(response.body || response.response.statusCode)
    } catch (err) {
      console.log(err)
    }
  }

  extractBankAccounts(rawBankAccounts: Array<Account>) {
    const bankAccounts = rawBankAccounts.map(bankAccount => {
      return {
        id: bankAccount.accountID,
        name: bankAccount.name,
        bankAccountNumber: bankAccount.bankAccountNumber,
      }
    })

    return bankAccounts
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

  createBankTransactionHistoryRecord(
    bankTransactionID: string,
    message: string,
  ) {
    const historyRecord: HistoryRecord = {
      details: message,
    }

    const historyRecords: HistoryRecords = {
      historyRecords: [historyRecord],
    }

    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .createBankTransactionHistoryRecord(
          this.activeTenantId,
          bankTransactionID,
          historyRecords,
        )
        .then(response => {
          resolve(response.body.historyRecords)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  async getBankTransactionHistoryRecords(bankTransactionID: string) {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .getBankTransactionsHistory(this.activeTenantId, bankTransactionID)
        .then(response => {
          resolve(response.body.historyRecords)
        })
        .catch(error => {
          promiseErrorResponse(error, resolve)
        })
    })

    return promise
  }

  filterBankTransactionHistoryRecords(historyRecords: Array<HistoryRecord>) {
    const prefix = 'Apollo'
    const filterFunc = function (record: HistoryRecord) {
      return record.details?.includes(prefix)
    }

    const records = historyRecords.filter(filterFunc)

    return records
  }

  async createFakeBankTransaction(
    reference: string,
    account: Account,
    isReconciled: boolean,
    total: number,
  ) {
    const contacts = <Array<Contact>>await this.getContacts()
    if (!contacts) {
      console.log('contacts array is empty!')
      return
    }
    const contact: Contact = <Contact>contacts[0]
    console.log(account)

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
        unitAmount: total,
        accountCode: '260',
      },
    ]

    const newBankTransaction: BankTransaction = {
      type: BankTransaction.TypeEnum.RECEIVE,
      contact: useContact,
      lineItems: lineItems,
      bankAccount: useBankAccount,
      total,
      isReconciled,
      reference,
    }

    console.log(newBankTransaction)

    const transactions = <Array<BankTransactions>>(
      await this.createBankTransaction(newBankTransaction)
    )

    console.log(transactions[0])
  }

  async updateBankTransaction(
    xeroTransactionId: string,
    transactions: BankTransactions,
  ) {
    const promise = new Promise(resolve => {
      this.xero.accountingApi
        .updateBankTransaction(
          this.activeTenantId,
          xeroTransactionId,
          transactions,
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

  async createFakeBankAccount(
    bankAccountNumber: string,
    name = 'DBS USD Account',
  ) {
    const account: Account = {
      name: name,
      type: AccountType.BANK,
      bankAccountNumber: bankAccountNumber,
    }

    const response: any = await this.createBankAccount(account)
    console.log(response)
  }

  generateFakeBankAccountNumber() {
    const getRandomNumber = function (range: number) {
      return Math.round(Math.random() * ((range || 100) - 1) + 1)
    }

    return getRandomNumber(209087654321050).toString()
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
