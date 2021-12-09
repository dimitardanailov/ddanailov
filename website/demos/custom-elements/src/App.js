/**
 * @format
 */
import logo from './logo.svg';
// import './App.css'
// import CustomDatepicker from './CustomDatepicker'
import CustomSelect from './CustomSelect';
import CustomFormControl from './CustomFormControl';
import AddCustomerBankAccount from './Fiat/BankAccount';
function App() {
  const currencies = ['USD', 'EUR'];
  const countries = [];
  countries.push({
    key: 'ITA',
    name: 'Italy',
  });
  countries.push({
    key: 'FRA',
    name: 'France',
  });

  return (
    <div className="App">
      <header className="App-header">
        <CustomSelect />
        <CustomFormControl>
          <CustomSelect />{' '}
        </CustomFormControl>

        <AddCustomerBankAccount
          countries={countries}
          customer_id="123"
          currencies={currencies}
        />
      </header>
    </div>
  );
}

export default App;
