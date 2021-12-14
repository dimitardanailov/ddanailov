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
  const [bankName, setBankName] = useState(props.bank_name);
  const [swiftCode, setSwiftCode] = useState(props.swift_code);
  const [iban, setIban] = useState(props.iban);
  const [accountNumber, setAccountNumber] = useState(props.account_number);
  const [accountName, setAccountName] = useState(props.account_name);

  const [country, setCountry] = useState(props.country);
  const updateCountrySelection = event => {
    setCountry(event.target.value);
  };

  const [currencies, setCurrencies] = useState([]);
  const updateCurrencyList = event => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCurrencies(currencies => [...currencies, event.target.value]);
    } else {
      const tempCurriencies = currencies.filter(c => {
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
      bank_name: bankName,
      iban: iban,
      account_number: accountNumber,
      account_name: accountName,
      swift_code: swiftCode,
      currencies: currencies,
      country: country,
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
    bankName.length > 0 &&
    iban.length > 0 &&
    accountName.length > 0 &&
    accountNumber.length > 0 &&
    swiftCode.length > 0 &&
    country.length > 0 &&
    currencies.length > 0;

  return (
    <div className="row">
      <div className="col-6">
        <p className="h4 font-weight-bolder">Bank account Details</p>
      </div>
      <div className="col-12">
        <TextFieldRow
          label="Bank name"
          value={bankName}
          setParentValue={setBankName}
        />

        <TextFieldRow
          label="Bank SWIFT CODE"
          value={swiftCode}
          setParentValue={setSwiftCode}
        />

        <TextFieldRow
          label="International Bank account number"
          value={iban}
          setParentValue={setIban}
        />

        <TextFieldRow
          label="Bank account number"
          value={accountNumber}
          setParentValue={setAccountNumber}
        />

        <TextFieldRow
          label="Bank account name"
          value={accountName}
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
              {props.countries.map(country => (
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
            {props.currencies.map(currency => (
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
