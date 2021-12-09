import React, {useState} from 'react';
import defaultProps from './defaultProps';
import createBankAccount from './createBankAccount';

function TextFieldRow({label, value, setParentValue}) {
  const [_value, setValue] = useState(value);

  const onChange = event => {
    setValue(event.target.value);
    setParentValue(event.target.value);
  };

  return (
    <div className="row mt-1">
      <div className="col-3">{label}</div>
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={_value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

TextFieldRow.defaultProps = {
  label: '',
  value: '',
};

function AddCustomerBankAccount(props) {
  const {
    bank_name,
    iban,
    account_number,
    account_name,
    swift_code,
    currencies,
    country,
    countries,
  } = props;

  const [_bankName, setBankName] = useState(bank_name);
  const [_swiftCode, setSwiftCode] = useState(swift_code);
  const [_iban, setIban] = useState(iban);
  const [_accountNumber, setAccountNumber] = useState(account_number);
  const [_accountName, setAccountName] = useState(account_name);

  const [_country, setCountry] = useState(country);
  const updateCountrySelection = event => {
    setCountry(event.target.value);
  };

  const [_currencies, setCurrencies] = useState([]);
  const updateCurrencyList = event => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCurrencies(_currencies => [..._currencies, event.target.value]);
    } else {
      const tempCurriencies = _currencies.filter(c => {
        return c !== event.target.value;
      });
      setCurrencies(tempCurriencies);
    }
  };

  const [errors, setErrors] = useState([]);
  const onSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const bankAccount = {
      bank_name: _bankName,
      iban: _iban,
      account_number: _accountNumber,
      account_name: _accountName,
      swift_code: _swiftCode,
      currencies: _currencies,
      country: _country,
    };

    if (bankAccount.bank_name.length === 0) {
      setErrors(errors => [...errors, 'Bank name is missing']);
    }
    if (bankAccount.iban.length === 0) {
      setErrors(errors => [...errors, 'Iban is missing']);
    }
    if (bankAccount.account_name.length === 0) {
      setErrors(errors => [...errors, 'Account name is missing']);
    }
    if (bankAccount.account_number.length === 0) {
      setErrors(errors => [...errors, 'Account number is missing']);
    }
    if (bankAccount.swift_code.length === 0) {
      setErrors(errors => [...errors, 'Swift code is missing']);
    }

    if (bankAccount.currencies.length === 0) {
      setErrors(errors => [...errors, 'Please select at least one currency']);
    }

    if (bankAccount.country.length === 0) {
      setErrors(errors => [...errors, 'Country is missing']);
    }

    const formDataIsValid =
      bankAccount.bank_name.length > 0 &&
      bankAccount.iban.length > 0 &&
      bankAccount.account_number.length > 0 &&
      bankAccount.account_number.length > 0 &&
      bankAccount.swift_code.length > 0 &&
      bankAccount.country.length > 0 &&
      bankAccount.currencies.length > 0;

    if (formDataIsValid) {
      createBankAccount(props, bankAccount);
    }
  };

  const formDataIsValid =
    _bankName.length > 0 &&
    _iban.length > 0 &&
    _accountName.length > 0 &&
    _accountNumber.length > 0 &&
    _swiftCode.length > 0 &&
    _country.length > 0 &&
    _currencies.length > 0;

  return (
    <div className="row">
      <div className="col-6">
        <p className="h4 font-weight-bolder">Bank account Details</p>
      </div>
      <div className="col-12">
        <TextFieldRow
          label="Bank name"
          value={bank_name}
          setParentValue={setBankName}
        />

        <TextFieldRow
          label="Bank SWIFT CODE"
          value={swift_code}
          setParentValue={setSwiftCode}
        />

        <TextFieldRow
          label="International Bank account number"
          value={iban}
          setParentValue={setIban}
        />

        <TextFieldRow
          label="Bank account number"
          value={account_number}
          setParentValue={setAccountNumber}
        />

        <TextFieldRow
          label="Bank account name"
          value={account_name}
          setParentValue={setAccountName}
        />

        <div className="row">
          <div className="col-3">Country</div>
          <div className="col-9">
            <select
              className="form-select"
              aria-label="Country list"
              onChange={updateCountrySelection}
            >
              <option></option>
              {countries.map(country => (
                <option key={country.key} value={country.key}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-3">Currencies</div>
          <div className="col-9">
            {currencies.map(currency => (
              <div key={currency} className="d-inline p-1 form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    value={currency}
                    onChange={updateCurrencyList}
                    className="form-check-label"
                  />
                  {currency}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-1 d-flex justify-content-center">
          <button
            className="w-50 btn btn-sm mr-2 btn-primary p-1"
            disabled={!formDataIsValid}
            onClick={onSubmit}
          >
            Submit New Bank Account for Approval
          </button>
        </div>

        <div className="col-12">
          {errors.map((error, i) => (
            <p key={i} className="text-danger">
              {error}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

AddCustomerBankAccount.defaultProps = defaultProps;

export default AddCustomerBankAccount;
