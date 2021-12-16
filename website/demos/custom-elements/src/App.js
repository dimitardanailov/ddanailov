/**
 * @format
 */
import logo from './logo.svg'
// import './App.css'
import CustomDatepicker from './CustomDatepicker'
import CustomSelect from './CustomSelect'
import CustomFormControl from './CustomFormControl'
import AddCustomerBankAccount from './Fiat/BankAccount'
import CustomTextField from './CustomTextField'
import CustomTable from './Table'
import React from 'react'
function App() {
  const currencies = ['USD', 'EUR']
  const countries = []
  countries.push({
    key: 'ITA',
    name: 'Italy',
  })
  countries.push({
    key: 'FRA',
    name: 'France',
  })

  const [textFieldValue, fnSetParentValue] = React.useState('')

  const setParentValue = value => {
    console.log('setParentValue', value)
    fnSetParentValue(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>Rest API value: {textFieldValue}</div>
          <CustomTextField setParentValue={setParentValue} />
        </div>
        <CustomDatepicker />
        <CustomSelect />
        <CustomFormControl>
          <CustomSelect />{' '}
        </CustomFormControl>

        <AddCustomerBankAccount
          countries={countries}
          customer_id="123"
          currencies={currencies}
        />

        <CustomTable />
      </header>
    </div>
  )
}

export default App
