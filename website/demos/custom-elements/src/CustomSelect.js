import {MenuItem, Select} from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'

const StyledSelect = styled(Select)`
  background: red;
  color: blue;

  padding: 0;
  width: 100px;
  height: 25px;
  font-size: 14px;

  margin: 0;

  & .MuiSelect-nativeInput {
    border: 1px solid red;
  }
`

const StyledMenuItem = styled(MenuItem)`
  border: 1px solid red;
  padding: 0;
  padding-right: 185px;
`

function CustomSelect({values, selectedValue = 20}) {
  /*
  const [isOpen, setIsOpen] = React.useState(true)

  const onChange = () => {
    setIsOpen(!isOpen)
  } */

  return (
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      value={selectedValue}
    >
      <StyledMenuItem value={10}>Ten</StyledMenuItem>
      <StyledMenuItem value={20}>Twenty</StyledMenuItem>
      <StyledMenuItem value={30}>Thirty</StyledMenuItem>
    </StyledSelect>
  )
}

export default CustomSelect
