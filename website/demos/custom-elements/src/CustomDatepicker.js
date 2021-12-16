import React from 'react'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import DatePicker from '@mui/lab/DatePicker'
import CalendarPicker from '@mui/lab/CalendarPicker'
import {styled} from '@mui/material/styles'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
// import styled from 'styled-components'

const CustomizedSlider = styled(Slider)`
  color: green;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 2px;
  }
`

const CustomTextField = styled(TextField)`
  background-color: red;
`

const CustomizedCalendar = styled(StaticDatePicker)`
  border: 1px solid red;
  color: blue;

  display: red;

  & .MuiTypography-root {
    color: purple;
  }
`

const CustomizedDatepicker = styled(DatePicker)`
  border: 100px solid red;
  display: none;
  background: red;
`

const CustomCalendarPicker = styled(CalendarPicker)`
  border: 1px solid red;
  background: red;
  min-height: 164px;

  & .MuiCalendarPicker-viewTransitionContainer {
    background: yellow;
  }

  & .MuiPickersDay-root {
    background: blue;
  }
`

export default function CustomDatepicker() {
  const [value, setValue] = React.useState(new Date())
  const textField = (
    <TextField
      value="Read only"
      InputProps={{
        readOnly: true,
      }}
    />
  )

  const renderInput = function (params) {
    const textFieldProps = {
      ...params,
      inputProps: {
        ...params.inputProps,
        readOnly: true,
      },
    }

    return <TextField {...textFieldProps} />
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {textField}

      <CustomTextField />
      <CustomizedSlider defaultValue={30} />

      <div>
        <DesktopDatePicker
          label="Date desktop"
          value={value}
          inputFormat="MM/dd/yyyy"
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={renderInput}
        />
      </div>

      <CustomizedDatepicker
        label="Basic example"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => (
          <TextField
            InputProps={{
              readOnly: true,
            }}
            {...params}
          />
        )}
      />
      <CustomizedCalendar
        displayStaticWrapperAs="desktop"
        openTo="year"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => (
          <TextField
            InputProps={{
              readOnly: true,
            }}
            {...params}
          />
        )}
      />
      <CustomCalendarPicker
        onChange={newValue => {
          setValue(newValue)
        }}
      />
    </LocalizationProvider>
  )
}
