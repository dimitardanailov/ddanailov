/**
 * @format
 */
import {useState, useCallback} from 'react'
import {TextField} from '@mui/material'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

function CustomTextField(props) {
  const {label, setParentValue, wait} = props

  const [value, setValue] = useState(props.value)

  const debouncedSave = useCallback(
    debounce(newValue => setParentValue(newValue), wait),
    [],
  )

  const onChange = event => {
    setValue(event.target.value)
    debouncedSave(event.target.value)
  }

  return (
    <>
      <div>Text field: {value}</div>
      <TextField value={value} label={label} onChange={onChange} />
    </>
  )
}

CustomTextField.defaultProps = {
  label: '',
  value: '',
  wait: 500,
}

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setParentValue: PropTypes.func,
  wait: PropTypes.number,
}

export default CustomTextField
